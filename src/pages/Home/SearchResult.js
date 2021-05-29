import React from 'react'
import { PersonList } from './PersonList';
import {v4 as uuid} from 'uuid'
import styles from './index.module.css';


// this is more of the wrapper  that holds the entire list of people
export const SearchResult = ({people, handleSpclKeys, listRef}) => {
    return (
        <>
            {
                people.length > 0 && 
                <div>
                    <div className={styles.divider}>
                        <div className={styles.lineTop}></div>
                        <div className={styles.line + " bg-blackish"}></div>
                    </div>
                    <ul className={styles.listWrap + " bg-brown-gray color-whitish"}>
                        {people.map((person, idx) =>
                            <PersonList idx={idx} person={person} handleSpclKeys={handleSpclKeys} listRef={listRef} key={uuid()} />
                        )}
                    </ul>
                </div>
            }
        </>
    )
}
