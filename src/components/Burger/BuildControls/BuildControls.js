import React from 'react';
import { BUILD_CONTROL } from '../constants';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';


const BuildControls = (props) => {
    const getAllBuildControls = (controls) =>
        controls.map(control =>
            <BuildControl
                key={control.label}
                label={control.label}
                addIngredientsHandler={() => props.addIngredientsHandler(control.type)}
                removeIngredientsHandler={() => props.removeIngredientsHandler(control.type)}
                disableBtns={props.disableBtns[control.type]}
            />);


    return (
        <div className={classes.BuildControls}>
            <p> Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {getAllBuildControls(BUILD_CONTROL)}
            <button className={classes.OrderButton}
                disabled={!props.purchasable}
            >Order Now</button>
        </div>
    )
}

export default BuildControls;

