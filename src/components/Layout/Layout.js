import React from 'react';
import classes from '../../App.module.css';
export default function Layout(props) {
    return (
        <>
            <div>
                Toolbar, Sidebar, Backdrop
            </div>
            <main className={classes.MT1}>
                {props.children}
            </main>
        </>

    )
}
