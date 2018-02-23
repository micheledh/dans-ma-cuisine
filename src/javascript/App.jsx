import styles from 'styles/App.scss';

import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import Header from './components/header/Header';

import Routes from './Routes';


export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.content}>
                    {/* <Link to="/">show page 1</Link>
                    <Link to="/page2/">show page 2</Link> */}
                    {Routes}
                </main>
            </div>
        );
    }
}
