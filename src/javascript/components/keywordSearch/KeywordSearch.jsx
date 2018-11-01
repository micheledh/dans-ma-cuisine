import React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from '../../../styles/search/search.scss';

export default function KeywordSearch() {
    return (
        <div className={styles.searchContainer}>
            <FormattedMessage id="vegetarian">
                {msg => (<input placeholder={`${msg}...`} className={styles.searchInput} />)}
            </FormattedMessage>
            <button className={styles.searchBtn}><FormattedMessage id="search" /></button>
        </div>
    );
}
