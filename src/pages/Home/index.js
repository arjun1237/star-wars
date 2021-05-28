import React, { useState } from 'react';
import logo from './star-wars-logo.png';
import styles from './index.module.css';
import {getSearchResults} from '../../utils/api-calls'
import { Link } from 'react-router-dom';
import {v4 as uuid} from 'uuid'

function HomePage() {

  const [search, setSearch] = useState("")
  const [people, setPeople] = useState([])

  const handleSearch = async (e) => {
    let val = e.target.value.trim()
    setSearch(val)
    let results = await getSearchResults(val)
    setPeople(results)
  }

  const getID = (url) => {
    try{
      let val = url.split('people')[1]
      console.log(val)
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
  );
}

export default HomePage;
