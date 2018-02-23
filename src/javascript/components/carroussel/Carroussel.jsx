import React, {Component} from 'react';
import recipeBook from 'javascript/store/RecipeData';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import styles from 'styles/carroussel/carroussel.scss';
import Slide from '../slide/Slide';

const test = {
    enter: styles.enter,
    enterActive: styles.enterActive,
    exit: styles.exit,
    exitActive: styles.exitActive,
};

export default class Carroussel extends Component {
    state = {
        indexToShow: 0
    };

    componentDidMount() {
        this.startAutoCaroussel();
    }

    componentWillUnmount() {
        clearTimeout(this.autoCaroussel);
        this.autoCaroussel = null;
    }

    autoCaroussel = null;

    startAutoCaroussel = () => {
        this.autoCaroussel = setTimeout(() => {
            const newIndex = this.state.indexToShow < recipeBook.size - 1 ? this.state.indexToShow + 1 : 0;
            this.setState({
                indexToShow: newIndex
            });
            this.startAutoCaroussel();
        }, 5000);
    };

    render() {
        const recipeBookIterable = Array.from(recipeBook);
        return (
            <div className={styles.carroussel}>
                <TransitionGroup>
                    <CSSTransition
                        in
                        timeout={1000}
                        classNames={test}
                        key={recipeBookIterable[this.state.indexToShow][0]}
                    >
                        <Slide data={recipeBookIterable[this.state.indexToShow][1]} />
                    </CSSTransition>
                </TransitionGroup>
            </div>

        );
    }
}
