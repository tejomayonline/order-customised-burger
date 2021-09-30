import React from 'react';
import { generateUniqueKey } from '../../helpers/helpers';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { INGREDIENT_TYPE } from './constants';

export default function burger({ ingredients }) {

    const buildIngredients = (ingredients) => {
        let dynamicIngredients = [];
        let ingredientKey;
        for (let ingredient in ingredients) {
            for (let i = 0; i < ingredients[ingredient]; i++) {
                ingredientKey = generateUniqueKey();
                dynamicIngredients.push(
                    <BurgerIngredient
                        key={ingredientKey}
                        type={ingredient}
                    />)
            }
        }
        if (!dynamicIngredients.length) {
            dynamicIngredients = <p>Please start adding Ingredients!</p>
        }
        return dynamicIngredients;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient key='bread-top' type={INGREDIENT_TYPE['bread-top']} />
            {buildIngredients(ingredients)}
            <BurgerIngredient key='bread-bottom' type={INGREDIENT_TYPE['bread-bottom']} />
        </div>
    )
}
