import React from 'react';
import {FormattedMessage} from 'react-intl';

import styles from '../../../styles/search/search.scss';

export default function IngredientSearch() {
    return (
        <div className={styles.searchContainer}>
            <FormattedMessage id="cream">
                {msg => (<input placeholder={`${msg}...`} className={styles.searchInput} />)}
            </FormattedMessage>
            <button className={styles.searchBtn}><FormattedMessage id="search" /></button>
        </div>
    );
}
