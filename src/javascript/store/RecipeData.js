/* eslint import/prefer-default-export: "off" */
import nutellaFondantSmall from 'images/nutella_fondant_small.jpg';
import nutellaFondantBig from 'images/nutella_fondant_big.jpg';
import caesarSaladSmall from 'images/caesar_salad_small.jpg';
import caesarSaladBig from 'images/caesar_salad_big.jpg';
import pepperSauceSmall from 'images/pepper_sauce_small.jpg';
import pepperSauceBig from 'images/pepper_sauce_big.jpg';
import avocadoShrimpCupBig from 'images/avocado_shrimp_cup_big.jpg';
import avocadoShrimpCupSmall from 'images/avocado_shrimp_cup_small.jpg';
import cheeseCreamPastaBig from 'images/cheese_cream_pasta_big.jpg';
import cheeseCreamPastaSmall from 'images/cheese_cream_pasta_small.jpg';
import cookiesBig from 'images/cookies_big.jpg';
import cookiesSmall from 'images/cookies_small.jpg';
import fruitSaladBig from 'images/fruit_salad_big.jpg';
import fruitSaladSmall from 'images/fruit_salad_small.jpg';
import gaspachoBig from 'images/gaspacho_big.jpg';
import gaspachoSmall from 'images/gaspacho_small.jpg';
import leekFondueBig from 'images/leek_fondue_big.jpg';
import leekFondueSmall from 'images/leek_fondue_small.jpg';
import lemonWaterBig from 'images/lemon_water_big.jpg';
import lemonWaterSmall from 'images/lemon_water_small.jpg';
import normanTartBig from 'images/norman_tart_big.jpg';
import normanTartSmall from 'images/norman_tart_small.jpg';
import shepherdsPieBig from 'images/shepherds_pie_big.jpg';
import shepherdsPieSmall from 'images/shepherds_pie_small.jpg';
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

export const avocadoShrimpCup = {
    id: 'avocado-shrimp-cup',
    title: 'avocadoShrimpCup',
    imageSmall: avocadoShrimpCupSmall,
    imageBig: avocadoShrimpCupBig,
    ingredients: {
        serve: serveHowMany(4),
        listData: [
            ingredient({ingredientType: 'avocado', unitType: 'none', unitValue: 4}),
            ingredient({ingredientType: 'lemonJuice', unitType: 'drops', unitValue: ''}),
            ingredient({ingredientType: 'gratedSurimi', unitType: 'grammes', unitValue: 150}),
            ingredient({ingredientType: 'shrimps', unitType: 'none', unitValue: 12}),
            ingredient({ingredientType: 'mayonnaise', unitType: 'tbsps', unitValue: 2}),
            ingredient({ingredientType: 'cremeFraiche', unitType: 'grammes', unitValue: 100}),
            ingredient({ingredientType: 'saltAndPepper', unitType: 'preference', unitValue: ''}),
            ingredient({ingredientType: 'chive', unitType: 'sprigs', unitValue: 5}),
            ingredient({ingredientType: 'glasses', unitType: 'none', unitValue: 4})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 20}),
            timeMessage({timeType: 'rest', timeUnit: 'minutes', timeValue: 30}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 50})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'avocadoShrimp1'}),
            instruction({instructionType: 'avocadoShrimp2'}),
            instruction({instructionType: 'avocadoShrimp3'}),
            instruction({instructionType: 'avocadoShrimp4'}),
            instruction({instructionType: 'avocadoShrimp5'}),
            instruction({instructionType: 'avocadoShrimp6'})
        ]
    },
    keywords: ['starter']
};

recipeBook.set(avocadoShrimpCup.id, avocadoShrimpCup);

export const cheeseCreamPasta = {
    id: 'cheese-cream-pasta',
    title: 'cheeseCreamPasta',
    imageSmall: cheeseCreamPastaSmall,
    imageBig: cheeseCreamPastaBig,
    ingredients: {
        serve: serveHowMany(4),
        listData: [
            ingredient({ingredientType: 'pasta', unitType: 'grammes', unitValue: 400}),
            ingredient({ingredientType: 'milk', unitType: 'glass', unitValue: '1/2'}),
            ingredient({ingredientType: 'blueCheese', unitType: 'grammes', unitValue: 100}),
            ingredient({ingredientType: 'goatCheese', unitType: 'slices', unitValue: 2}),
            ingredient({ingredientType: 'mustard', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'cremeFraiche', unitType: 'cL', unitValue: 20}),
            ingredient({ingredientType: 'coarseSalt', unitType: 'some', unitValue: ''}),
            ingredient({ingredientType: 'parsley', unitType: 'some', unitValue: ''})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 5}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 15}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 20})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'cheeseCreamPasta1'}),
            instruction({instructionType: 'cheeseCreamPasta2'}),
            instruction({instructionType: 'cheeseCreamPasta3'})
        ]
    },
    keywords: ['main', 'quick', 'vegetarian']
};

recipeBook.set(cheeseCreamPasta.id, cheeseCreamPasta);

export const cookies = {
    id: 'cookies',
    title: 'cookies',
    imageSmall: cookiesSmall,
    imageBig: cookiesBig,
    ingredients: {
        serve: serveHowMany(6),
        listData: [
            ingredient({ingredientType: 'egg', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'sugar', unitType: 'grammes', unitValue: 85}),
            ingredient({ingredientType: 'flour', unitType: 'grammes', unitValue: 150}),
            ingredient({ingredientType: 'butter', unitType: 'grammes', unitValue: 85}),
            ingredient({ingredientType: 'chocolateChips', unitType: 'grammes', unitValue: 100}),
            ingredient({ingredientType: 'vanillaSugar', unitType: 'sachet', unitValue: 1}),
            ingredient({ingredientType: 'bakingPowder', unitType: 'tsp', unitValue: 1}),
            ingredient({ingredientType: 'salt', unitType: 'tsp', unitValue: '1/2'})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 15}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 10}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 25})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'cookies1'}),
            instruction({instructionType: 'cookies2'}),
            instruction({instructionType: 'cookies3'}),
            instruction({instructionType: 'cookies4'}),
            instruction({instructionType: 'cookies5'})
        ]
    },
    keywords: ['dessert', 'quick', 'vegetarian']
};

recipeBook.set(cookies.id, cookies);

export const fruitSalad = {
    id: 'fruit-salad',
    title: 'fruitSalad',
    imageSmall: fruitSaladSmall,
    imageBig: fruitSaladBig,
    ingredients: {
        serve: serveHowMany(6),
        listData: [
            ingredient({ingredientType: 'pineapple', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'watermelon', unitType: 'none', unitValue: '1/2'}),
            ingredient({ingredientType: 'peaches', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'melon', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'strawberries', unitType: 'basket', unitValue: 1}),
            ingredient({ingredientType: 'kiwis', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'banana', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'oranges', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'apples', unitType: 'none', unitValue: 2}),
            ingredient({ingredientType: 'vanillaSugar', unitType: 'sachets', unitValue: 2}),
            ingredient({ingredientType: 'sugar', unitType: 'grammes', unitValue: 100}),
            ingredient({ingredientType: 'lemonJuice', unitType: 'none', unitValue: '1 lemon'}),
            ingredient({ingredientType: 'orangeJuice', unitType: 'none', unitValue: '2 oranges'})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 30}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 30})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'fruitSalad1'}),
            instruction({instructionType: 'fruitSalad2'}),
            instruction({instructionType: 'fruitSalad3'}),
            instruction({instructionType: 'fruitSalad4'}),
            instruction({instructionType: 'fruitSalad5'}),
            instruction({instructionType: 'fruitSalad6'})
        ]
    },
    keywords: ['dessert', 'quick', 'vegetarian', 'light']
};

recipeBook.set(fruitSalad.id, fruitSalad);

export const gaspacho = {
    id: 'gaspacho',
    title: 'gaspacho',
    imageSmall: gaspachoSmall,
    imageBig: gaspachoBig,
    ingredients: {
        serve: serveHowMany(8),
        listData: [
            ingredient({ingredientType: 'tomatoes', unitType: 'none', unitValue: 5}),
            ingredient({ingredientType: 'cucumber', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'redPepper', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'garlic', unitType: 'cloves', unitValue: 2}),
            ingredient({ingredientType: 'oliveOil', unitType: 'tbsps', unitValue: 3})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 20}),
            timeMessage({timeType: 'rest', timeUnit: 'hours', timeValue: 4}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 260})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'gaspacho1'}),
            instruction({instructionType: 'gaspacho2'}),
            instruction({instructionType: 'gaspacho3'})
        ]
    },
    keywords: ['starter', 'light', 'vegetarian']
};

recipeBook.set(gaspacho.id, gaspacho);

export const leekFondue = {
    id: 'leek-fondue',
    title: 'leekFondue',
    imageSmall: leekFondueSmall,
    imageBig: leekFondueBig,
    ingredients: {
        serve: serveHowMany(4),
        listData: [
            ingredient({ingredientType: 'leeks', unitType: 'grammes', unitValue: 600}),
            ingredient({ingredientType: 'butter', unitType: 'grammes', unitValue: 30}),
            ingredient({ingredientType: 'cremeFraiche', unitType: 'tbsps', unitValue: 2}),
            ingredient({ingredientType: 'lemonJuice', unitType: 'tbsps', unitValue: 2}),
            ingredient({ingredientType: 'mustardDijon', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'saltAndPepper', unitType: 'preference', unitValue: ''})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 10}),
            timeMessage({timeType: 'cooking', timeUnit: 'hour', timeValue: 1}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 70})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'leekFondue1'}),
            instruction({instructionType: 'leekFondue2'}),
            instruction({instructionType: 'leekFondue3'}),
            instruction({instructionType: 'leekFondue4'})
        ]
    },
    keywords: ['main', 'light', 'vegetarian']
};

recipeBook.set(leekFondue.id, leekFondue);

export const lemonWater = {
    id: 'lemon-water',
    title: 'lemonWater',
    imageSmall: lemonWaterSmall,
    imageBig: lemonWaterBig,
    ingredients: {
        serve: serveHowMany(6),
        listData: [
            ingredient({ingredientType: 'lemons', unitType: 'none', unitValue: 6}),
            ingredient({ingredientType: 'sugar', unitType: 'glassesQuantity', unitValue: 2}),
            ingredient({ingredientType: 'honey', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'limoncello', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'water', unitType: 'L', unitValue: 1.5}),
            ingredient({ingredientType: 'salt', unitType: 'pinch', unitValue: 1}),
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 10}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 10}),
            timeMessage({timeType: 'rest', timeUnit: 'hours', timeValue: 4}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 260})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'lemonWater1'}),
            instruction({instructionType: 'lemonWater2'}),
            instruction({instructionType: 'lemonWater3'})
        ]
    },
    keywords: ['drink']
};

recipeBook.set(lemonWater.id, lemonWater);

export const normanTart = {
    id: 'norman-tart',
    title: 'normanTart',
    imageSmall: normanTartSmall,
    imageBig: normanTartBig,
    ingredients: {
        serve: serveHowMany(6),
        listData: [
            ingredient({ingredientType: 'egg', unitType: 'none', unitValue: 3}),
            ingredient({ingredientType: 'flour', unitType: 'grammes', unitValue: 200}),
            ingredient({ingredientType: 'sugar', unitType: 'grammes', unitValue: 200}),
            ingredient({ingredientType: 'butter', unitType: 'grammes', unitValue: 100}),
            ingredient({ingredientType: 'salt', unitType: 'pinch', unitValue: 1}),
            ingredient({ingredientType: 'apples', unitType: 'kg', unitValue: 1}),
            ingredient({ingredientType: 'groundAlmond', unitType: 'grammes', unitValue: 50}),
            ingredient({ingredientType: 'calvados', unitType: 'cL', unitValue: 1}),
            ingredient({ingredientType: 'cremefraiche', unitType: 'grammes', unitValue: 200}),
            ingredient({ingredientType: 'sliveredAlmonds', unitType: 'some', unitValue: ''})
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 30}),
            timeMessage({timeType: 'cooking', timeUnit: 'minutes', timeValue: 25}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 55})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'normanTart1'}),
            instruction({instructionType: 'normanTart2'}),
            instruction({instructionType: 'normanTart3'}),
            instruction({instructionType: 'normanTart4'}),
            instruction({instructionType: 'normanTart5'}),
            instruction({instructionType: 'normanTart6'})
        ]
    },
    keywords: ['dessert', 'vegetarian']
};

recipeBook.set(normanTart.id, normanTart);

export const shepherdsPie = {
    id: 'shepherds-pie',
    title: 'shepherdsPie',
    imageSmall: shepherdsPieSmall,
    imageBig: shepherdsPieBig,
    ingredients: {
        serve: serveHowMany(6),
        listData: [
            ingredient({ingredientType: 'potatoes', unitType: 'kg', unitValue: 1}),
            ingredient({ingredientType: 'milk', unitType: 'cL', unitValue: 20}),
            ingredient({ingredientType: 'cream', unitType: 'tbsp', unitValue: 1}),
            ingredient({ingredientType: 'butter', unitType: 'grammes', unitValue: 75}),
            ingredient({ingredientType: 'nutmeg', unitType: 'preference', unitValue: ''}),
            ingredient({ingredientType: 'gratedGruyere', unitType: 'grammes', unitValue: 100}),
            ingredient({ingredientType: 'minceBeef', unitType: 'grammes', unitValue: 500}),
            ingredient({ingredientType: 'onion', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'shallot', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'garlic', unitType: 'cloves', unitValue: 2}),
            ingredient({ingredientType: 'carrot', unitType: 'none', unitValue: 1}),
            ingredient({ingredientType: 'saltAndPepper', unitType: 'preference', unitValue: ''}),
        ]
    },
    time: {
        timeData: [
            timeMessage({timeType: 'preparation', timeUnit: 'minutes', timeValue: 10}),
            timeMessage({timeType: 'cooking', timeUnit: 'hour', timeValue: 1}),
            timeMessage({timeType: 'total', timeUnit: 'minutes', timeValue: 70})
        ]
    },
    instructions: {
        instructionData: [
            instruction({instructionType: 'shepherdsPie1'}),
            instruction({instructionType: 'shepherdsPie2'}),
            instruction({instructionType: 'shepherdsPie3'}),
            instruction({instructionType: 'shepherdsPie4'}),
            instruction({instructionType: 'shepherdsPie5'}),
            instruction({instructionType: 'shepherdsPie6'})
        ]
    },
    keywords: ['main']
};

recipeBook.set(shepherdsPie.id, shepherdsPie);

export const FooterRecipeData = [nutellaFondant, cheeseCreamPasta, cookies];

export default recipeBook;
