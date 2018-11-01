import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import styles from 'styles/menu/menu.scss';

import Category from '../category/Category';
import KeywordSearch from '../keywordSearch/KeywordSearch';
import IngredientSearch from '../ingredientSearch/IngredientSearch';

const smallView = 500;

export default class Menu extends Component {
    state = {
        isOpen: false,
        windowWidth: 0,
    };

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextState.windowWidth <= smallView && this.state.windowWidth > smallView) {
            this.setState({
                isOpen: false,
            });
        }
        if (nextState.windowWidth > smallView && this.state.windowWidth <= smallView) {
            this.setState({
                isOpen: true,
            });
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize = () => {
        this.setState({
            windowWidth: window.innerWidth,
        });
    };

    openMenu = () => {
        this.setState({
            isOpen: true,
        });
    };

    closeMenu = () => {
        this.setState({
            isOpen: false,
        });
    };

    render() {
        if (this.state.isOpen) {
            const isSmallView = this.state.windowWidth <= smallView;
            const menuStyle = isSmallView ? styles.slideMenu : styles.menu;
            return (
                <nav className={`${menuStyle}`}>
                    {isSmallView ?
                        <button onClick={this.closeMenu} className={styles.closeMenu}>
                            X
                        </button> : null}
                    <h3 className={styles.menuTitles}><FormattedMessage id="categories" /></h3>
                    <Category />
                    <h3 className={styles.menuTitles}><FormattedMessage id="keywordResearch" /></h3>
                    <KeywordSearch />
                    <h3 className={styles.menuTitles}><FormattedMessage id="ingredientResearch" /></h3>
                    <IngredientSearch />
                </nav>
            );
        }
        return (
            <button onClick={this.openMenu} className={styles.openMenu}>M</button>
        );
    }
}
