import PropTypes from 'prop-types';
import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => (props.show) ?
    <div className={classes.Backdrop}
        onClick={props.clicked} >
    </div> : null;


backdrop.propTypes = {
    show: PropTypes.bool.isRequired
}

export default backdrop;

