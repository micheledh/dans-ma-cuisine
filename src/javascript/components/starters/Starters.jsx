import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import recipeBook from '../../store/RecipeData';

import styles from '../../../styles/recipeListPage/recipeListPage.scss';


const startersArray = [];
function arrayBuild(recipe) {
    if (recipe.keywords[0] === 'starter') {
        startersArray.push(recipe);
    }
}
recipeBook.forEach(arrayBuild);

export default class Starters extends Component {
    static propTypes = {
        history: PropTypes.object
    };

    goBack = () => {
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <button onClick={this.goBack} className={styles.backBtn}>
                    <FormattedMessage id="goBack" />
                </button>
                <h1 className={styles.listTitle}><FormattedMessage id="starters" /></h1>
                <ul>
                    {startersArray.map(item => (
                        <li key={item.title}>
                            <Link to={`/recipe/${item.id}`} className={styles.recipeLink}>
                                <FormattedMessage id={item.title} />
                            </Link>
                        </li>))}
                </ul>
            </div>
        );
    }
}
