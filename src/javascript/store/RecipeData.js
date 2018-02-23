/* eslint import/prefer-default-export: "off" */
import nutellaFondantSmall from 'images/nutella_fondant_small.jpg';
import nutellaFondantBig from 'images/nutella_fondant_big.jpg';
import caesarSaladSmall from 'images/caesar_salad_small.jpg';
import caesarSaladBig from 'images/caesar_salad_big.jpg';
import pepperSauceSmall from 'images/pepper_sauce_small.jpg';
import pepperSauceBig from 'images/pepper_sauce_big.jpg';
import {ingredient, serveHowMany, timeMessage, instruction, instructionCommon} from '../utils/messagesUtils';

const recipeBook = new Map();

export const nutellaFondant = {
    id: 'nutella-fondant',
    title: 'nutellaFondant',
    imageSmall: nutellaFondantSmall,
    imageBig: nutellaFondantBig,
    ingredients: {
        serve: serveHowMany(6),
        listData: [
            ingredient({ingredientType: 'flour', unitType: 'grammes', unitValue: 180}),
            ingredient({ingredientType: 'bakingPowder', unitType: 'sachet', unitValue: 1}),
            ingredient({ingredientType: 'egg', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'eggWhite', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'salt', unitType: 'pinch', unitValue: 1}),
            ingredient({ingredientType: 'nutella', unitType: 'grammes', unitValue: 120}),
            ingredient({ingredientType: 'vanillaSugar', unitType: 'sachets', unitValue: 2}),
            ingredient({ingredientType: 'milk', unitType: 'cL', unitValue: 10})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 15}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 20}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 35})
        ]
    },
    instructions: {
        instructionData: [
            instructionCommon({instructionType: 'preheatOven', temperature: 180}),
            instruction({instructionType: 'nutella1'}),
            instruction({instructionType: 'nutella2'}),
            instruction({instructionType: 'nutella3'}),
            instruction({instructionType: 'nutella4'}),
            instruction({instructionType: 'nutella5'})
        ]
    },
    keywords: ['dessert', 'vegetarian']
};

recipeBook.set(nutellaFondant.id, nutellaFondant);

const caesarSalad = {
    id: 'caesar-salad',
    title: 'caesarSalad',
    imageSmall: caesarSaladSmall,
    imageBig: caesarSaladBig,
    ingredients: {
        serve: serveHowMany(4),
        listData: [
            ingredient({ingredientType: 'icebergLettuce', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'chickenBreast', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'softBread', unitType: 'slices', unitValue: 2}),
            ingredient({ingredientType: 'oliveOil', unitType: 'dash', unitValue: ''}),
            ingredient({ingredientType: 'mayonnaise', unitType: 'tbsps', unitValue: 6}),
            ingredient({ingredientType: 'milk', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'lemonJuice', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'gratedParmesanCheese', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'mustardDijon', unitType: 'tsp', unitValue: 1}),
            ingredient({ingredientType: 'garlic', unitType: 'clove', unitValue: 1}),
            ingredient({ingredientType: 'saltAndPepper', unitType: 'preference', unitValue: ''})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 15}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 5}),
            timeMessage({timeType: 'rest', timeUnit: 'hour', timeValue: 1}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 80})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'caesar1'}),
            instruction({instructionType: 'caesar2'}),
            instruction({instructionType: 'caesar3'}),
            instruction({instructionType: 'caesar4'}),
            instruction({instructionType: 'caesar5'})
        ]
    },
    keywords: ['starter']
};

recipeBook.set(caesarSalad.id, caesarSalad);

const pepperSauce = {
    id: 'pepper-sauce',
    title: 'pepperSauce',
    imageSmall: pepperSauceSmall,
    imageBig: pepperSauceBig,
    ingredients: {
        serve: serveHowMany(4),
        listData: [
            ingredient({ingredientType: 'butter', unitType: 'grammes', unitValue: 30}),
            ingredient({ingredientType: 'flour', unitType: 'grammes', unitValue: 20}),
            ingredient({ingredientType: 'beefBroth', unitType: 'cL', unitValue: 40}),
            ingredient({ingredientType: 'wineVinegar', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'pepper', unitType: 'tsps', unitValue: 2}),
            ingredient({ingredientType: 'salt', unitType: 'preference', unitValue: ''})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 20}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 10}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 30})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'pepper1'}),
            instruction({instructionType: 'pepper2'}),
            instruction({instructionType: 'pepper3'}),
            instruction({instructionType: 'pepper4'})
        ]
    },
    keywords: ['sauce', 'quick', 'vegetarian']
};

recipeBook.set(pepperSauce.id, pepperSauce);

export const FooterRecipeData = [nutellaFondant, caesarSalad, pepperSauce];

export default recipeBook;
