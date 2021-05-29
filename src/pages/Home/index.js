import React, { useEffect, useRef, useState } from 'react';
import logo from './star-wars-logo.png';
import styles from './index.module.css';
import {getSearchResults} from '../../utils/api-calls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import {SearchUtilsWrapper} from '../../styles/home-styles'
import { PersonList } from './PersonList';

function HomePage() {

  const [search, setSearch] = useState("")
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  let time = useRef()
  let previous = useRef()
  let listRef = useRef([])
  let listFocusIndexRef = useRef(0)
  const wait = 750

  useEffect(() => {
    // throttling implementation

    if (!time.current) {
      time.current = Date.now()
      extractPeopleInfo(search)
    } else {
      clearTimeout(previous.current)
      previous.current = setTimeout(function() {
        if ((Date.now() - time.current) >= wait) {
          extractPeopleInfo(search)
          time.current = Date.now()
        }
      }, wait - (Date.now() - time.current))
    }
    
  }, [search])

  const handleSearch = (e) => {
    let val = e.target.value
    setSearch(val)
    listFocusIndexRef.current = 0
  }

  const extractPeopleInfo = async (search) => {
    if(search.length === 0){
      listFocusIndexRef.current = 0
      setPeople([])
    }
    else{
      setLoading(true)
      let res = await getSearchResults(search.trim())
      if(res){
        setPeople(res)
      }
      setLoading(false)
    }
  }

  // when arrow key is pressed up or down, respective list is focused
  const handleArrows = (e) => {
    if(people.length === 0){
      listFocusIndexRef.current = 0
      return
    }
    let code = e.keyCode
    if(code === 27){
      setPeople([])
      listFocusIndexRef = 0
    }
    else if(code === 38 || code === 40){
      if(code === 40){
        listFocusIndexRef.current = listFocusIndexRef.current === people.length ? 1 : ++listFocusIndexRef.current
      }
      if(code === 38){
        listFocusIndexRef.current = listFocusIndexRef.current === 1 || listFocusIndexRef.current === 0? people.length : --listFocusIndexRef.current
      }
      listRef.current[listFocusIndexRef.current-1].focus()
    }
  }
  
  const clearSearch = () => {
    setSearch("")
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <div className={styles.inputWrapper}>
        <div>
          <SearchUtilsWrapper className={styles.searchUtils} display={(search.length > 0).toString()}>
            <div className={`${styles.cross} searchUtilDisplay`} onClick={clearSearch}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className={`${styles.verticalDivider} searchUtilDisplay`}></div>
            <div className={styles.searchbarIcon + (loading ? " color-yellow" : " bg-yellow")}>
              {!loading ? <FontAwesomeIcon icon={faSearch} /> : 
                          <FontAwesomeIcon icon={faSpinner} className="spinner" />}
            </div>
          </SearchUtilsWrapper>
          <input type="text" className={styles["search-input"]} placeholder="Search by name" value={search} onChange={handleSearch} onKeyUp={handleArrows} onClick={() => listFocusIndexRef.current = 0} />
          {
            people.length > 0 && 
            <div>
              <div className={styles.divider}>
                <div className={styles.lineTop}></div>
                <div className={styles.line}></div>
              </div>
              <ul className={styles.listWrap}>
                {people.map((person, idx) =>
                  <PersonList idx={idx} person={person} handleArrows={handleArrows} listRef={listRef} />
                )}
              </ul>
            </div>
          }
          
        </div>
      </div>

    </div>
  );
}

export default HomePage;
