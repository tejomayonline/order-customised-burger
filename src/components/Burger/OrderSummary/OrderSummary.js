import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

export default function OrderSummary(props) {
    const getIngredients = (ingredients) => {
        let ingredientTemplate = [];
        for (let ingredient in ingredients) {
            ingredientTemplate.push(
                <li key={ingredient}>
                    <span className={classes.OrderListItem}>{ingredient}</span> - {ingredients[ingredient]}
                </li>)
        }
        return ingredientTemplate;
    }

    return (
        <>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {getIngredients(props.ingredients)}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.cancelOrderFn}>Cancel</Button>
            <Button btnType='Success' clicked={props.placeOrderFn}>Continue</Button>
        </>
    )
}
