import PropTypes from 'prop-types';
import React from 'react';
import classes from './BuildControl.module.css';
function BuildControl(props) {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={props.removeIngredientsHandler}
                className={classes.Less}
                disabled={props.disableBtns}>Less</button>
            <button
                onClick={props.addIngredientsHandler}
                className={classes.More}>More</button>
        </div>
    )
}

BuildControl.propTypes = {
    label: PropTypes.string.isRequired
}

export default BuildControl

