import styles from 'styles/home/home.scss';

import React, {Component} from 'react';
import Footer from '../footer/Footer';
import Carroussel from '../carroussel/Carroussel';
import Menu from '../menu/Menu';

export default class Home extends Component {
    render() {
        return (
            <div className={styles.homeContainer}>
                {/* menu */}
                <Menu className={styles.menu} />
                <div className={styles.contentContainer}>
                    {/* content */}
                    <div className={styles.content}>
                        <Carroussel />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec semper leo ligula, a efficitur mauris viverra a.
                            Nulla consectetur non neque ac elementum. Vestibulum in ornare nunc.
                            Praesent id vulputate velit. Nunc et orci at diam pellentesque viverra et at risus.
                            Cras lectus augue, dictum sed nisl vitae, fermentum posuere nunc.
                            Phasellus finibus lobortis cursus.
                            Phasellus nisl erat, aliquam nec ligula id, volutpat feugiat neque.
                            Nam vitae placerat eros.
                        </p>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }
}
