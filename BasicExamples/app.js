import React, { Component } from 'react';
import { render } from 'react-dom';

const template ={
  Title: 'Indecision App',
  Subtitle: 'Practice Session'
}
let user ={
  Name:'Surya',
  Age:28,
  Mobile:9032586092,
  Designation:'Full Stack Developer',
  Location:'Rajamahendravaram'
};
function getlocation(Location){
  return Location ? <p> Location : {Location} </p> : <p> Location : {'Unknow'} </p> ;
}
let template = (
  <div>
    <h1> {template.Title} </h1>
    <h3> {template.Subtitle} </h3>
    <p> Username :{user.Name.toUpperCase()} </p>
    { user.Age && user.Age >= 18 && <p> Age :{user.Age} </p> }
    <p> Mobile :{user.Mobile} </p>
    <p> Designation :{user.Designation} </p>
      {getlocation(user.Location)}
  </div>
);
const appRoot = document.getElementById('app');

render (template, appRoot);

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