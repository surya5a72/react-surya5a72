import React, { Component } from 'react';
import { render } from 'react-dom';

const AppRoot =document.getElementById('app');
const options =['one', 'two'];
const Application={
  title:"Indecision App",
  subtitle:"React Practice App",
  options:['one', 'two']
}

console.log(Application);
class IndecisionApp extends React.Component{
  render(){
    const title="Indecision App";
    return(
    <div className="container">
      <Header Application={Application} title={title}/> 
      <Action />
      <Options defaultoptions={Application.options}/>
      <Addoption />
    </div>
    );
  }
}


class Header extends React.Component{
  render(){
    return (
      <div className="row" align="center">
        <h1> {this.props.Application.title}</h1>
        <h4>{this.props.title}</h4>
        <h3> {this.props.Application.subtitle} </h3>
      </div>
    );
  };
}

class Action extends React.Component{
  render(){
    return (
      <div className="row" align="center">
        <button> what should i do ? </button>
        <br /><br />
      </div>
    );
  }
}

class Options extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      // <div>
        // <div className="row">
        //   <Option options={this.props.defaultoptions}/>
        // </div>
        <div className="row">
          <ol>
            {this.props.defaultoptions.map((opt)=> <Optionmap option ={opt} /> )}
          </ol>
        </div>
      // </div>
    );
  }
}

class Option extends React.Component{
  render(){
    return(
      <div className="row" align="center">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <ol>           
            {this.props.options.map((opt) =>{
              return(
                <div className="row"> 
                  <div className="col-md-6" align="left">
                    <li key={opt}> item {opt} </li> 
                  </div>
                  <div className="col-md-6">
                    <button onClick={removeoption} className="btn btn-danger"> Remove </button>
                  </div>
                  <br/><br/>
              </div>
            )})}
          </ol>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    );
  }
}

class Optionmap extends React.Component{
  render(){
    return(
      <div className="row" align="center">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <div className="row"> 
            <div className="col-md-6" align="left">
              <li key={this.props.option}> item {this.props.option} </li> 
            </div>
            <div className="col-md-6">
              <button onClick={removeoption} className="btn btn-danger"> Remove </button>
            </div>
            <br/><br/>
          </div>
        </div>
        <div className="col-md-4">
        </div>
      </div>
    );
  }
}

const submitoption = (e) => {
  e.preventDefault();
  let option = e.target.elements.opt.value;
  if(option){
    Application.options.push(option);
    templaterender();
    e.target.elements.opt.value =null;
  }
}

const removeoption = (e) =>{
  // debugger;
  let option = e.target.elements;
  console.log('clicked');
}

class Addoption extends React.Component{
  render(){
    return(
      <div>
        <form onSubmit={submitoption}>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control" name="opt" />
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
            </div>
            <div className="col-md-4" align="center">
              <button className="btn btn-success" id="btnAdd"> Addoption </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const templaterender = () =>{  
  render(<IndecisionApp />, AppRoot);
}
templaterender();