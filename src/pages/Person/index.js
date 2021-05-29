import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {getPerson} from '../../utils/api-calls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { DisplayPerson } from './DisplayPerson';

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

  return  loading ? <FontAwesomeIcon icon={faSpinner} size="6x" className={`color-yellow spinner`} /> : 
          person ?  <DisplayPerson person={person} /> : <h1 className="color-yellow">Person Not Found..!</h1>;
}

export default Person;
