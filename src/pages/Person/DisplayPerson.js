import React from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { Bio } from './Bio';

export const DisplayPerson = ({person, homeWorld, films}) => {

	return (
		<div className={styles.personDetails + " color-yellow"}>
			<div className={styles.frame + " border-color-yellow"}>
				<h1>{person.name}</h1>
				<FontAwesomeIcon icon={person.gender === "male" ? faMale : faFemale} size="10x" />
			</div>
			<Bio person={person} homeWorld={homeWorld} films={films} />
		</div>
	)
}
