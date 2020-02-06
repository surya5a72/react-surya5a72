import React, { Component } from 'react';
import Modal from 'react-modal';

export const OptionModal = (props) =>(
  <Modal 
    isOpen={props.showmodal}
    contentLabel="Selected Options"
    onRequestClose={props.close}
    ariaHideApp={false}
    >
    {props.children}
    {props.item}
    <a onClick={props.close} > close </a>
  </Modal>
);

