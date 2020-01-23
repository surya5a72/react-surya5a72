import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import EmployeeDetails from './Components/EmployeeDetails.Component';
//import EmployeeDetails from './Services/Service';


//render(<EmployeeDetails />, document.getElementById('root'));
//console.log('surya');

const square = function(x){
  return x*x;
}

const squarearrow = (x) =>{
  return x*x;
}

console.log(squarearrow(7));

const arrsquare = (x) => x*x;

console.log(arrsquare(5));

var fullname = 'surya sairaj l';

const getfirstnaemme = (name) => name.split(' ')[0];

console.log(getfirstnaemme(fullname));