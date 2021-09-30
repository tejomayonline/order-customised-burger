import React, { Component } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.css';

export default class Modal extends Component {
    getModalStyle = (show) => (show) ?
        [classes.Modal, classes.show].join(' ') :
        [classes.Modal, classes.hide].join(' ')

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }
    componentDidUpdate() {
        console.log('Modal updated');
    }
    render = () => {
        return (
            <>
                <Backdrop show={this.props.show}
                    clicked={this.props.closeModalFn} />
                <div className={this.getModalStyle(this.props.show)}>
                    {this.props.children}
                </div>

            </>
        )
    }
}


