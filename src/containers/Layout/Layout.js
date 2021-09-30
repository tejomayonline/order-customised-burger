import React, { Component } from 'react';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

export default class Layout extends Component {
    state = {
        sideBarActive: false,
    }

    closeSiderDrawer = () => {
        this.setState({ sideBarActive: false });
    }

    openSiderDrawer = () => {
        this.setState({ sideBarActive: true });
    }

    render() {
        return (
            <>
                <Toolbar showDrawer={this.openSiderDrawer} />
                <SideDrawer show={this.state.sideBarActive}
                    closed={this.closeSiderDrawer} />
                <main className={classes.MainContent}>
                    {this.props.children}
                </main>
            </>

        )
    }

}
