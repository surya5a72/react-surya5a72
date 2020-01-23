import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import EmployeeDetails from './Components/EmployeeDetails.Component';
//import EmployeeDetails from './Services/Service';


//render(<EmployeeDetails />, document.getElementById('root'));
var user ={
  Name:'Surya',
  Age:28,
  Mobile:9032586092,
  Designation:'Full Stack Developer'
};
var template = (
  <div>
    <h1> Indecision App </h1>
    <p> this is from react app </p>
  </div>
);
var appRoot = document.getElementById('app');

render (template, appRoot);