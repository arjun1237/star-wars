import React from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faFemale } from '@fortawesome/free-solid-svg-icons'
import { Bio } from './Bio';
import { useHistory } from 'react-router';

export const DisplayPerson = ({person, homeWorld, films}) => {
	const history = useHistory()

	const clickHandler = () => {
		history.push('/')
	}

	return (
		<div>
			<div className={styles.personDetails + " color-yellow"}>
				<div className={styles.frame + " border-color-yellow"}>
					<h1>{person.name}</h1>
					<FontAwesomeIcon icon={person.gender === "male" ? faMale : faFemale} size="10x" />
				</div>
				<Bio person={person} homeWorld={homeWorld} films={films} />
			</div>
			<div className={styles.btnWrap}>
				<div className={"border-color-yellow color-yellow " + styles.btnHover} onClick={clickHandler}>Back to HOME</div>
			</div>
		</div>
	)
}
