import React, { useEffect, useState } from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { Bio } from './Bio';

export const DisplayPerson = ({person}) => {


	return (
		<div className={styles.personDetails}>
			<div className={styles.frame}>
				<h1>{person.name}</h1>
				<FontAwesomeIcon icon={person.gender === "male" ? faMale : faFemale} size="10x" />
			</div>
			<Bio person={person} />
		</div>
	)
}
