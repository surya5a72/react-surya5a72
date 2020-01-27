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

const user ={
  Name:'Surya',
  Cities: ['Rajahmundry', 'Hyderabad', 'Bangalore'],
  //we shouldn't use arrow function here if we use it looks for the parent scope and thus there won't be any values available for the function.
  Workedcities:function(){
    //console.log(this.Name);
    //console.log(this.Cities);
    //pure es5 function. while using function inside function the scope of "this" keyword wont be available for inside function then we need to declare a const and assign the this to anyother property then we can access the this keyword properties inside the nested function. below is example.
    
    // const that = this;
    // this.Cities.forEach(function(city){
    //   console.log(that.Name + ' is lived and worked in '+city);
    // });

    //when using arrow function inside a function this keyword will be available for the scope of arrow function below is example. 
    // this.Cities.forEach((city)=>{
    //   console.log(this.Name + ' is lived and worked in '+city);
    // });

    //map can be used in multiple ways below are examples
    // return this.Cities.map((city) =>  {
    //   return this.Name + ' is lived and worked in '+city;
    //  });
    return this.Cities.map((city) =>  this.Name + ' is lived and worked in '+city );
  }
}
console.log(user.Workedcities());