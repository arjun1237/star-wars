import React from 'react'
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter, getID } from '../../utils/helperFunctions';

export const PersonList = ({idx, handleSpclKeys, person, listRef}) => {
	return (
		<Link to={`/person/${getID(person.url)}`} ref={el => listRef.current[idx] = el} tabIndex={idx+1} onKeyUp={handleSpclKeys} className="list">
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
