import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import EmployeeDetails from './Components/EmployeeDetails.Component';
//import EmployeeDetails from './Services/Service';


//render(<EmployeeDetails />, document.getElementById('root'));
//console.log('surya');


let count = 0;
const countid='btnid';
const add = () =>{ 
  ++count;
  rendertemplate();
  console.log(count);
}
const appRoot = document.getElementById('app');
const rendertemplate =() =>{
  const template = (
    <div>
      <h1> Indecision App </h1>
      <h3> Count : {count}</h3>
      <button id={countid} className="btnClass" onClick={add}>+{count}</button> 
    </div>
  );
  render (template, appRoot);
};

rendertemplate();