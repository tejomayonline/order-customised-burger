import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

function modal(props) {
    const getModalStyle = (show) => (show) ?
        `${classes.Modal} ${classes.show}` :
        `${classes.Modal} ${classes.hide}`
    return (
        <>
            <div className={getModalStyle(props.show)}>
                {props.children}
            </div>
            <Backdrop show={props.show}
                clicked={props.closeModalFn} />
        </>
    )
}

modal.propTypes = {

}

export default modal;

