import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

// this technique has a problem with "overflow" property and the "z-index" did not solve this issue
// for this, the "createPortal" component is used

// first, we import it into our JSX like that:
// import { createPortal } from 'react-dom';

// we go to the root "index.html" file (where is "root div") and create  <div id="root-modal"></div>
// after that look below

const modalRoot = document.querySelector('#root-modal');

// and using special react method createPortal(). Put the markup into it the markup as a first argument. And as a second
// we passing our modaRoot variable to bind

export default class Modal extends Component {
  componentDidMount() {
    //event listener hangs in this method
    // console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener('keydown', this.handleKeydown);
  }

  //making it as a public method to unmount it later passing a link on the method
  handleKeydown = (e) => {
    // console.log('e.code', e.code);

    if (e.code === 'Escape') {
      console.log('Escape tapped');

      this.props.onCloseModal(); //call the onCloseModal prop to close the modal tapping the "Escape"
    }
  };

  // closing modal by clicking outside the modal (clicking on the backdrop)
  handleBackdropClick = (e) => {
    // console.log('Clicking on the backdrop');

    if (e.target === e.currentTarget) {
      console.log('target: ', e.target);
      this.props.onCloseModal();
    }

    // console.log('target: ', e.target);
    // console.log('currentTarget: ', e.currentTarget);
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
