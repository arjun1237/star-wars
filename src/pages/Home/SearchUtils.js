import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { SearchUtilsWrapper } from '../../styles/home-styles'
import styles from './index.module.css';

export const SearchUtils = ({loading, search, clearSearch}) => {
    return (
        <SearchUtilsWrapper className={styles.searchUtils} display={(search.length > 0).toString()}>
            <div className={`${styles.cross} searchUtilDisplay`} onClick={clearSearch}>
                <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className={`${styles.verticalDivider + " bg-blackish"} searchUtilDisplay`}></div>
            <div className={styles.searchbarIcon + (loading ? " color-yellow" : " bg-yellow")}>
                {!loading ? <FontAwesomeIcon icon={faSearch} /> : 
                            <FontAwesomeIcon icon={faSpinner} className="spinner" />}
            </div>
        </SearchUtilsWrapper>
    )
}
