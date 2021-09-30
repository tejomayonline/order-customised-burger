import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

function Logo(props) {
    return (
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt="Burger logo" />
        </div>
    )
}

Logo.propTypes = {

}

export default Logo

