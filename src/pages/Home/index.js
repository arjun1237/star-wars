import React, { useEffect, useRef, useState } from 'react';
import logo from '../../resources/pics/star-wars-logo.png';
import styles from './index.module.css';
import {getSearchResults} from '../../utils/api-calls'
import { throttle } from '../../utils/throttle'
import { SearchUtils } from './SearchUtils';
import { SearchResult } from './SearchResult';

function HomePage() {

  const [search, setSearch] = useState("")
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)

  let listRef = useRef([]) // has access to each of the person list
  let listFocusIndexRef = useRef(0) // used to identify which list to focus on

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

  // throttle implementation
  let throttleHandle =  throttle(extractPeopleInfo, 500)

  useEffect(() => {
    throttleHandle(search)
    // eslint-disable-next-line
  }, [search])

  const handleSearch = (e) => {
    let val = e.target.value
    setSearch(val)
    listFocusIndexRef.current = 0
  }

  const handleSpclKeys = (e) => {
    if(people.length === 0){
      listFocusIndexRef.current = 0
      return
    }
    let code = e.keyCode
    
    // when escape key is pressed the list disappears
    if(code === 27){
      setPeople([])
      listFocusIndexRef = 0
    }
    // when arrow key is pressed up or down, respective list is focused. 
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
          <input  type="text" 
                  className={styles["search-input"] + " bg-brown-gray color-whitish"} 
                  placeholder="Search by name" 
                  value={search} 
                  onChange={handleSearch} 
                  onKeyUp={handleSpclKeys} 
                  onClick={() => listFocusIndexRef.current = 0} 
          />
          <SearchUtils loading={loading} clearSearch={clearSearch} search={search} />
          <SearchResult people={people} handleSpclKeys={handleSpclKeys} listRef={listRef} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
