import React from 'react';
import recipeBook from '../../store/RecipeData';

const startersArray = [];
function arrayBuild(recipe) {
    if (recipe.keywords[0] === 'starter') {
        startersArray.push(recipe);
    }
}
recipeBook.forEach(arrayBuild);

export default function Starters() {
    return (
        <div>
            <h1>Starters</h1>
            {startersArray.map(item => <li key={item.title}>{item.title}</li>)}
        </div>
    );
}
