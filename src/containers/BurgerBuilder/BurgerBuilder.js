import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';
import { INGREDIENT_PRICE, INGREDIENT_TYPE } from '../../components/Burger/constants';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';


export default class BurgerBuilder extends Component {
    state = {
        ingredients: {
            [INGREDIENT_TYPE.salad]: 0,
            [INGREDIENT_TYPE.bacon]: 0,
            [INGREDIENT_TYPE.cheese]: 0,
            [INGREDIENT_TYPE.meat]: 0,
        },
        totalPrice: 4,
        purchasable: false,
        showSummary: false,
    }

    addIngredients = (type) => {
        const newState = {
            ingredients: {
                ...this.state.ingredients,
                [type]: this.state.ingredients[type] + 1,
            },
            totalPrice: INGREDIENT_PRICE[type] + this.state.totalPrice
        }
        this.setState({ ...newState });
        this.updatePurchasable(newState.ingredients);
    }

    updatePurchasable(ingredients) {
        const ingredientsCount = Object.values(ingredients)
            .reduce((sum, cur) => sum + cur, 0);
        this.setState({ purchasable: ingredientsCount > 0 })
    }

    removeIngredients = (type) => {
        let newState = {
            ingredients: {
                ...this.state.ingredients,
                [type]: this.state.ingredients[type] - 1,
            },
            ...(this.state.totalPrice > 4) && {
                totalPrice: this.state.totalPrice - INGREDIENT_PRICE[type]
            }
        }
        this.setState({ ...newState });
        this.updatePurchasable(newState.ingredients);
    }

    showSummaryHandler = () => {
        this.setState({ showSummary: true });
    }

    hideSummaryHandler = () => {
        this.setState({ showSummary: false });
    }


    render() {
        let buttonDisabledState = { ...this.state.ingredients };
        for (let btn in buttonDisabledState) {
            buttonDisabledState[btn] = buttonDisabledState[btn] === 0;
        }

        return (
            <>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredientsHandler={this.addIngredients}
                    removeIngredientsHandler={this.removeIngredients}
                    disableBtns={buttonDisabledState}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    showSummaryFn={this.showSummaryHandler}
                />
                <Modal show={this.state.showSummary} closeModalFn={this.hideSummaryHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                        placeOrderFn={this.hideSummaryHandler}
                        cancelOrderFn={this.hideSummaryHandler}
                    />
                </Modal>
            </>
        )
    }
}
