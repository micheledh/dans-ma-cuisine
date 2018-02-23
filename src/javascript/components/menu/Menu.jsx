import React, {Component} from 'react';
import styles from 'styles/menu/menu.scss';

const smallView = 500;

export default class Menu extends Component {
    state = {
        isOpen: true,
        windowWidth: 0,
    };

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

    componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    componentWillUpdate(nextProps, nextState) {
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

    render() {
        if (this.state.isOpen) {
            const isSmallView = this.state.windowWidth <= smallView;
            const menuStyle = isSmallView ? styles.slideMenu : styles.menu;
            return (
                <nav className={`${menuStyle}`}>
                    {isSmallView ?
                        <button onClick={this.closeMenu}>
                            close
                        </button> : null}
                    <h3 className={styles.menuTitles}>Categories</h3>
                    <Category />
                    <h3 className={styles.menuTitles}>Keyword Research</h3>
                    <KeywordSearch />
                    <h3 className={styles.menuTitles}>Ingredient Research</h3>
                    <IngredientSearch />
                    <h3 className={styles.rankingLink}>Ranking</h3>
                </nav>
            );
        }
        return (
            <button onClick={this.openMenu}>click me</button>
        );
    }
}
