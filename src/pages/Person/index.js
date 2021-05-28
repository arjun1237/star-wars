import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './index.module.css';
import {getPerson} from '../../utils/api-calls'

function Person() {
  let {id} = useParams()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    (async function(){
      const res = await getPerson(id)
      if(res){
        setPerson(res)
      }
    })()

  }, [id])

  console.log(person)
  return person ? (
    <div className={styles.person}>
      <h1>{person.name}</h1>
    </div>
  ) : <h1>Person Not Found..!</h1>;
}

export default Person;
