import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import styles from 'styles/ingredients/ingredients.scss';

export default class Ingredients extends Component {
    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        const {data} = this.props;
        return (
            <div>
                <div>
                    <h4 className={styles.ingredientsTitle}>
                        <FormattedMessage id="ingredients" />
                    </h4>
                    <h6 className={styles.serve}>
                        {data.serve}
                    </h6>
                </div>
                <ul>
                    {data.listData.map(elem => (
                        <li key={elem.id}>
                            {elem.ingredient}
                            <span className={styles.space}>:</span>
                            {elem.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
