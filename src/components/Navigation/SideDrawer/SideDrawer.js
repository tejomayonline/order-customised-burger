import React from 'react';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
function SideDrawer(props) {
    return (
        <>
            <Backdrop
                show={props.show}
                clicked={props.closed} />
            <div className={[classes.SideDrawer, (props.show) ?
                classes.Open : classes.Close].join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <NavigationItems />
            </div>

        </>

    )
}

SideDrawer.propTypes = {

}

export default SideDrawer

