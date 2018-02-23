import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';

import styles from 'styles/slide/slide.scss';

export default class Slide extends Component {
    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        return (
            <div>
                <Link to={`/recipe/${this.props.data.id}`}>
                    <div className={styles.slideImage} style={{backgroundImage: `url(${this.props.data.imageBig})`}}>
                        <h3 className={styles.slideTitle}>
                            <FormattedMessage id={this.props.data.title} />
                        </h3>
                    </div>
                </Link>
            </div>
        );
    }
}
