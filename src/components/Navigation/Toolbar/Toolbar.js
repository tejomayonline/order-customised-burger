import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';
import classes from './Toolbar.module.css';

function Toolbar(props) {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle show={props.showDrawer} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            <div className={classes.DesktopOnly}>
                <NavigationItems />
            </div>

        </header>
    )
}

Toolbar.propTypes = {

}

export default Toolbar

