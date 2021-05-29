import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {getPerson} from '../../utils/api-calls'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { DisplayPerson } from './DisplayPerson';
import { getFilms, getHomeWorld } from '../../utils/api-calls';

function Person() {
  let {id} = useParams()
  const [person, setPerson] = useState(null)
  const [loading, setLoading] = useState(false)
	let [homeWorld, setHomeWorld] = useState("")
	let [films, setFilms] = useState([])

  useEffect(() => {
    (async function(){
      setLoading(true)
      const person = await getPerson(id)
      if(person){
        setPerson(person)
      }
			let home = await getHomeWorld(person.homeworld)
			if(home){
				setHomeWorld(home.name)
			}

			let films = await getFilms(person.films)
			if(films){
				setFilms(films)
			}
      setLoading(false)
    })()

  }, [])

  return  loading ? <FontAwesomeIcon icon={faSpinner} size="6x" className={`color-yellow spinner`} /> : 
          person ?  <DisplayPerson person={person} homeWorld={homeWorld} films={films} /> : <h1 className="color-yellow">Person Not Found..!</h1>;
}

export default Person;
