import React, { Component } from 'react';
import { render } from 'react-dom';

class Person{
  constructor(name = 'Anonymous', age=0){
    this.name = name;
    this.age = age;
  }

  getGreetings(){
    //return 'Hi I am '+ this.name +'!';
    return `Hi I am ${this.name}! and I am ${this.age} year(s) old`;  //template string
  }
}

class Student extends Person{
  constructor(name, age, major){
    super(name, age);
    this.major = major;
  }
  hasmajor(){
    return !!this.major;
  }

  getGreetings(){
    let description = super.getGreetings();
    if(this.hasmajor())
      description += ` There major is ${this.major}`;
    return  description;
  }
}

class Traveller extends Person{
  constructor(name, age, location){
    super(name, age);
    this.location = location;
  }
  haslocation(){
    return !!this.location;
  }
  
  getGreetings(){
    let description = super.getGreetings();
    if(this.haslocation())
      description += ` I am from ${this.location}`;
    return description;
  }
}

const me = new Student('Surya', 28,'CSE');
console.log(me.getGreetings());

const test = new Student();
console.log(test.getGreetings());

const me = new Traveller('Surya', 28,'Rajamahendravaram');
console.log(me.getGreetings());

const test = new Traveller();
console.log(test.getGreetings());

const AppRoot =document.getElementById('app');

const templaterender =() =>
{
  const template = (
    <div className="container" align="center">
      <h1> Indecision App</h1>
      <h3> React Practice App </h3>
    </div>
  );
  render(template, AppRoot);
};

templaterender();