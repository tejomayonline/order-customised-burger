import PropTypes from 'prop-types';
import React from 'react';
import classes from './Button.module.css';

function Button(props) {
    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(' ')}
            onClick={props.clicked}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    clicked: PropTypes.func.isRequired,
    btnType: PropTypes.string
}

export default Button

