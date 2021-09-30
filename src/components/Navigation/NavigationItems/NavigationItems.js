import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

function NavigationItems(props) {
    return (
        <nav>
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" active>Burger Builder</NavigationItem>
                <NavigationItem link="/">Checkout</NavigationItem>
            </ul>
        </nav>

    )
}

NavigationItems.propTypes = {

}

export default NavigationItems

