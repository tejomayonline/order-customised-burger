import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import classes from './OrderSummary.module.css';

export default class OrderSummary extends Component {
    getIngredients = (ingredients) => {
        let ingredientTemplate = [];
        for (let ingredient in ingredients) {
            ingredientTemplate.push(
                <li key={ingredient}>
                    <span className={classes.OrderListItem}>{ingredient}</span> - {ingredients[ingredient]}
                </li>)
        }
        return ingredientTemplate;
    }
    componentDidUpdate() {
        console.log('OrderSummary updated');
    }
    render() {
        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {this.getIngredients(this.props.ingredients)}
                </ul>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.cancelOrderFn}>Cancel</Button>
                <Button btnType='Success' clicked={this.props.placeOrderFn}>Continue</Button>
            </>
        )
    }

}
