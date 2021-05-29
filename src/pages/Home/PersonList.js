import React from 'react'
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, getID } from '../../utils/helperFunctions';
import styles from './index.module.css';

export const PersonList = ({idx, handleArrows, person, listRef}) => {
	return (
		<Link to={`/person/${getID(person.url)}`} ref={el => listRef.current[idx] = el} tabIndex={idx+1} onKeyUp={handleArrows} >
			<li>
				<div>
					<div>{person.name}</div>  
					<div className="color-light-gray">{capitalizeFirstLetter(person.gender)}</div>  
				</div>  
				<div className="color-light-gray">{person.birth_year}</div>  
			</li>
		</Link>
	)
}
