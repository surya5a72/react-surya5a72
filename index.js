import React, { Component } from 'react';
import { render } from 'react-dom';

const AppRoot =document.getElementById('app');
const options =['one', 'two'];

class IndecisionApp extends React.Component{
  constructor(){
    this.state={
      title:"Indecision App",
      subtitle:"React Practice App",
      options:['one', 'two']
    }

    this.RemoveAllDetails = this.RemoveAllDetails.bind(this);
    this.Whattodo = this.Whattodo.bind(this);
    this.AddOption = this.AddOption.bind(this);
  }

  RemoveAllDetails(){
    this.setState(() =>{
      return{
        options:[]
      };
    });
  }

  Whattodo(){
    let selopt= Math.floor(Math.random() * this.state.options.length);
    console.log(selopt)
  }

  AddOption(option){
    this.setState((prevState) =>{
      //prevState.options.push(option);
      return {
        //options:prevState.options
        options:prevState.options.concat([option])
      };
    });
  }
  

  render(){
    return(
    <div className="container">
      <Header Application={this.state} /> 
      <Action actopt={this.state.options} 
              RemoveAllDetails={this.RemoveAllDetails} 
              Whattodo ={this.Whattodo}
              hasoptions={this.state.options.length > 0}
      />

      <Options defaultoptions={this.state.options}/>
      <Addoption AddOption ={this.AddOption}/>
    </div>
    );
  }
}


class Header extends React.Component{
  render(){
    return (
      <div className="row" align="center">
        <h1> {this.props.Application.title}</h1>
        <h3> {this.props.Application.subtitle} </h3>
      </div>
    );
  };
}

class Action extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="row" align="center">
        <div className="col-md-4">
        </div>
        <div className="col-md-2">
          <button onClick={this.props.Whattodo} disabled={!this.props.hasoptions} className="btn btn-info"> what should i do ? </button>
        </div>
        <div className="col-md-2">
          <button onClick={this.props.RemoveAllDetails} className="btn btn-danger"> Remove All </button>
        </div>
        <div className="col-md-4">
        </div>
        <br /><br />
      </div>
    );
  }
}

class Options extends React.Component{
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
  constructor(props){
    super(props);
    this.SubmitOption = this.SubmitOption.bind(this);
  }

  SubmitOption(e){
    e.preventDefault();
    let option = e.target.elements.opt.value.trim();    
    if(option){
      this.props.AddOption(option);
    }
    e.target.elements.opt.value =null;
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