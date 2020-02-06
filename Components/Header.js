import React, { Component } from 'react';
import { render } from 'react-dom';

const Header = (props) =>(
  <div className="row" align="center">
    <h1> {props.title}</h1>
    <h3> {props.subtitle} </h3>
  </div>
);

//default props are related to component based and used to display the values in the UI below is the example.
//default props are initiated once the component is initiated properly
//default props code will be written below the component

Header.defaultProps = {
  title:'IndecisionApp',
  subtitle: 'React Practice App'
}

export {Header};