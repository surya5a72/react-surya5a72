import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
//import EmployeeDetails from './Components/EmployeeDetails.Component';
//import EmployeeDetails from './Services/Service';


//render(<EmployeeDetails />, document.getElementById('root'));
//console.log('surya');

const user ={
  Name:'Surya',
  Cities: ['Rajahmundry', 'Hyderabad', 'Bangalore'],
  //we shouldn't use arrow function here if we use it looks for the parent scope and thus there won't be any values available for the function.
  Workedcities:function(){
    console.log(this.Name);
    console.log(this.Cities);
    //pure es5 function. while using function inside function the scope of "this" keyword wont be available for inside function then we need to declare a const and assign the this to anyother property then we can access the this keyword properties inside the nested function. below is example.
    
    // const that = this;
    // this.Cities.forEach(function(city){
    //   console.log(that.Name + ' is lived and worked in '+city);
    // });

    //when using arrow function inside a function this keyword will be available for the scope of arrow function below is example. 
    this.Cities.forEach((city)=>{
      console.log(this.Name + ' is lived and worked in '+city);
    });
  }
}
user.Workedcities();
