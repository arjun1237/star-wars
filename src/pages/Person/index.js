import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './index.module.css';
import {getPerson} from '../../utils/api-calls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Person() {
  let {id} = useParams()
  const [person, setPerson] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async function(){
      setLoading(true)
      const res = await getPerson(id)
      if(res){
        setPerson(res)
      }
      setLoading(false)
    })()

  }, [id])

  console.log(person)
  return loading ? <FontAwesomeIcon icon={faSpinner} size="6x" className={`color-yellow spinner`} /> : person ? (
    <div className={styles.person}>
      <h1>{person.name}</h1>
    </div>
  ) : <h1>Person Not Found..!</h1>;
}

export default Person;
