import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import styles from './index.module.css';
import {getPerson} from '../../utils/api-calls'

function Person() {
  let {id} = useParams()
  const [person, setPerson] = useState({})

  useEffect(() => {
    (async function(){
      setPerson(await getPerson(id))
    })()

  }, [id])

  console.log(person)
  return (
    <div className={styles.person}>
      <h1>{person.name}</h1>
    </div>
  );
}

export default Person;
