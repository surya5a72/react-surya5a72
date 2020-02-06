import React, { Component } from 'react';
import { render } from 'react-dom';

const AppRoot =document.getElementById('app');
const options =['one', 'two'];
const Application={
  title:"Indecision App",
  subtitle:"React Practice App",
  options:['one', 'two']
}

const obj={
  name:'Surya',
  getname(){
    return this.name;
  }
}

//when we bind an obj to const variable it will lose its context and will become undefined. so we are tweaking the code a little and making it to work by using bind method.
const getname = obj.getname.bind(obj);

console.log(getname());
class IndecisionApp extends React.Component{
  render(){
    const title="Indecision App";
    return(
    <div className="container">
      <Header Application={Application} title={title}/> 
      <Action actopt={Application.options}/>
      <Options defaultoptions={Application.options}/>
      <Addoption addoption={Application.options}/>
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
  constructor(props){
    super(props);
    this.RemoveAllDetails = this.RemoveAllDetails.bind(this);
    this.Whattodo = this.Whattodo.bind(this);
  }
  RemoveAllDetails(){
    Application.options=[];;
    templaterender();
  }
  Whattodo(){
    let selopt= Math.floor(Math.random() * this.props.actopt.length);
    console.log(selopt)
  }
  render(){
    return (
      <div className="row" align="center">
        <div className="col-md-4">
        </div>
        <div className="col-md-2">
          <button onClick={this.Whattodo} className="btn btn-info"> what should i do ? </button>
        </div>
        <div className="col-md-2">
          <button onClick={this.RemoveAllDetails} className="btn btn-danger"> Remove All </button>
        </div>
        <div className="col-md-4">
        </div>
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
            {this.props.defaultoptions.map((opt)=> <Optionmap key={opt} option ={opt} /> )}
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
  RemoveOption(e){
    // debugger;
    let option = e.target.elements;
    console.log('clicked');
  }

  render(){
    return(
      <div className="row" align="center">
        <div className="col-md-4">
        </div>
        <div className="col-md-4">
          <div className="row"> 
            <div className="col-md-6" align="left">
              <li> item {this.props.option} </li> 
            </div>
            <div className="col-md-6">
              <button onClick={this.RemoveOption} className="btn btn-danger"> Remove </button>
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

class Addoption extends React.Component {

  constructor(props){ // the constructor props property is related to the same react component.
    super(props); // super props property is related to parent component properties can also be used in this component by calling super method in the constructor.
    this.SubmitOption = this.SubmitOption.bind(this);
  }
  SubmitOption(e){
    e.preventDefault();
    let option = e.target.elements.opt.value.trim();
    if(option){
      this.props.addoption.push(option);
      templaterender();
      e.target.elements.opt.value =null;
    }
  }

  render(){
    return(
      <div>
        <form onSubmit={this.SubmitOption}>
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
              <button className="btn btn-success" id="btnAdd"> Add Option </button>
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