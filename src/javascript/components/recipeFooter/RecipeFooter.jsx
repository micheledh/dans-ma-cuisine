import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import styles from 'styles/recipeFooter/recipeFooter.scss';

export default class RecipeFooter extends Component {
    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        const {data} = this.props;
        return (
            <Link to={`/recipe/${data.id}`} className={styles.recipeFooter}>
                <figure>
                    <img src={data.imageSmall} alt={data.title} className={styles.imgSize} />
                    <figcaption>
                        <FormattedMessage id={data.title} />
                    </figcaption>
                </figure>
            </Link>
        );
    }
}
