import React, { useEffect, useRef, useState } from 'react';
import logo from './star-wars-logo.png';
import styles from './index.module.css';
import {getSearchResults} from '../../utils/api-calls'
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid'

function HomePage() {

  const [search, setSearch] = useState("")
  const [people, setPeople] = useState([])
  let time = useRef()
  let previous = useRef()
  const wait = 1000

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
  }

  const extractPeopleInfo = async (search) => {
    if(search.length === 0){
      setPeople([])
    }
    else{
      let res = await getSearchResults(search.trim())
      if(!res){
        setPeople(res)
      }
    }
  }

  const getID = (url) => {
    try{
      let val = url.split('people')[1]
      return val.substring(1, val.length-1)
    }
    catch(err) {
      return 1
    }
  }

  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} alt="Star Wars Logo" />
      </div>
      <div className={styles.inputWrapper}>
        <div>
          <input type="text" className={styles["search-input"]} placeholder="Search by name" value={search} onChange={handleSearch} />
          <ul>
            {people?.map(person =>
              <Link to={`/person/${getID(person.url)}`} key={uuid()}>
                <li>{person.name}</li>
              </Link>
            )}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
