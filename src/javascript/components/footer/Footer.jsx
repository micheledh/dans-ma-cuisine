import React, {Component} from 'react';
import styles from 'styles/footer/footer.scss';
import {FooterRecipeData} from '../../store/RecipeData';
import RecipeFooter from '../recipeFooter/RecipeFooter';

export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.footer}>
                <h3 className={styles.footerTitle}>Top 3</h3>
                <div className={styles.recipeFooterContainer}>
                    {FooterRecipeData.map(item => <RecipeFooter data={item} key={item.title} />)}
                </div>

            </footer>
        );
    }
}
