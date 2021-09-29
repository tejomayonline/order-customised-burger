import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { INGREDIENT_TYPE } from '../constants';
import classes from './BurgerIngredient.module.css';

export default class BurgerIngredient extends Component {


    setIngredientByType(type) {
        let ingredient = null;
        switch (type) {
            case INGREDIENT_TYPE['bread-bottom']:
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case INGREDIENT_TYPE['bread-top']:
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>);
                break;
            case INGREDIENT_TYPE.meat:
                ingredient = <div className={classes.Meat}></div>;
                break;
            case INGREDIENT_TYPE.cheese:
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case INGREDIENT_TYPE.bacon:
                ingredient = <div className={classes.Bacon}></div>;
                break;
            case INGREDIENT_TYPE.salad:
                ingredient = <div className={classes.Salad}></div>;
                break;
            default:
                console.log('Invalid type ' + this.props.type);
        }
        return ingredient;
    }

    render() {
        return this.setIngredientByType(this.props.type);
    }

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}