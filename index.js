import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import EmployeeDetails from './Components/EmployeeDetails.Component';
//import EmployeeDetails from './Services/Service';


//render(<EmployeeDetails />, document.getElementById('root'));
//console.log('surya');

const AppRoot =document.getElementById('app');
let visibility = false;

const showhidedetails = () => {
  visibility = !visibility;
  templaterender();
}

const templaterender =() =>
{
  const template = (
    <div className="wrapper">
      <h1> Indecision App</h1>
      <h3> React Practice App </h3>
      <button id="btnshowhide" onClick={showhidedetails} className="btn btn-info"> {visibility ? 'Hide Details' :'Show details'} </button>
      {visibility && <p>these are the details to show</p>}
    </div>

  );
  render(template, AppRoot);
};

templaterender();