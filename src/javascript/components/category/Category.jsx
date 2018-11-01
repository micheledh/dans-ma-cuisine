import React from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import styles from '../../../styles/category/category.scss';

export default function Category() {
    return (
        <div className={styles.categoryLinks}>
            <Link to="/starters" className={styles.categoryLink}><FormattedMessage id="starters" /></Link>
            <Link to="/mains" className={styles.categoryLink}><FormattedMessage id="mains" /></Link>
            <Link to="/desserts" className={styles.categoryLink}><FormattedMessage id="desserts" /></Link>
            <Link to="/others" className={styles.categoryLink}><FormattedMessage id="others" /></Link>
        </div>
    );
}
