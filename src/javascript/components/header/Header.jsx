import React from 'react';
import {Link} from 'react-router-dom';
import styles from 'styles/header/header.scss';
import logo from 'images/logo.svg';
import LocaleStore from '../../store/Locale';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.linkToHome}>
                <h1 className={styles.title}>Dans ma cuisine</h1>
                <img src={logo} alt="Logo" className={styles.logo} />
            </Link>
            <div className={styles.buttonsDiv}>
                <button onClick={LocaleStore.goFr} className={styles.translationBtn}>Francais</button>
                <button onClick={LocaleStore.goEn} className={styles.translationBtn}>English</button>
            </div>
        </header>
    );
}
