import styles from 'styles/App.scss';

import React, {Component} from 'react';
import Header from './components/header/Header';

import Routes from './Routes';


export default class App extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Header />
                <main className={styles.content}>
                    {Routes}
                </main>
            </div>
        );
    }
}
