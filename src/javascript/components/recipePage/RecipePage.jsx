import styles from 'styles/recipePage/recipePage.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';
import RecipeBigView from '../recipeBigView/RecipeBigView';
import Instructions from '../instructions/Instructions';
import Ingredients from '../ingredients/Ingredients';
import Preparation from '../preparation/Preparation';
import recipeBook from '../../store/RecipeData';

export default class RecipePage extends Component {
    static propTypes = {
        match: PropTypes.object,
        history: PropTypes.object
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        const data = recipeBook.get(this.props.match.params.id);
        return (
            <div className={styles.container}>
                <button onClick={this.goBack} className={styles.backBtn}>
                    <FormattedMessage id="goBack" />
                </button>
                <RecipeBigView title={data.title} image={data.imageBig} />
                <Ingredients data={data.ingredients} />
                <Preparation data={data.time} />
                <Instructions data={data.instructions} />
            </div>
        );
    }
}
