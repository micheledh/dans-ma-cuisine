import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import styles from '../../../styles/recipeBigView/recipeBigView.scss';

export default class RecipeBigView extends Component {
    static propTypes = {
        title: PropTypes.string,
        image: PropTypes.string,
    };

    render() {
        return (
            <div>
                <h2>
                    <FormattedMessage id={this.props.title} />
                </h2>
                <img src={this.props.image} alt={this.props.title} className={styles.imageBig} />
            </div>
        );
    }
}
