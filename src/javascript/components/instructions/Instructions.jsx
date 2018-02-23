import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import styles from 'styles/instructions/instructions.scss';

export default class Instructions extends Component {
    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        const {data} = this.props;
        return (
            <div>
                <h4 className={styles.instructionsTitle}>
                    <FormattedMessage id="instructions" />
                </h4>
                <ul>
                    {data.instructionData.map(elem => (
                        <li key={elem.id}>
                            {elem.instruction}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
