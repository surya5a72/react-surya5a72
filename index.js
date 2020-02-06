import React, { Component } from 'react';
import { render } from 'react-dom';

//user defined components
import {IndecisionApp} from './Components/Indecision';

const AppRoot =document.getElementById('app');
const options =['one', 'two'];

const templaterender = () =>{  
  render(<IndecisionApp options={[]}/>, AppRoot);
}
templaterender();