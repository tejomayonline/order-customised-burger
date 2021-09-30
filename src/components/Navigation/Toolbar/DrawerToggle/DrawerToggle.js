import React from 'react';
import classes from './DrawerToggle.module.css';
function DrawerToggle(props) {
    return (
        <div className={classes.DrawerToggle} onClick={props.show}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

DrawerToggle.propTypes = {

}

export default DrawerToggle;

