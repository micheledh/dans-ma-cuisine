import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import styles from 'styles/preparation/preparation.scss';

export default class Preparation extends Component {
    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        const {data} = this.props;
        return (
            <div>
                <h4 className={styles.timeTitle}>
                    <FormattedMessage id="time" />
                </h4>
                <ul>
                    {data.timeData.map(elem => (
                        <li key={elem.id}>
                            {elem.timeType}
                            <span className={styles.space}>:</span>
                            {elem.timeUnit}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
