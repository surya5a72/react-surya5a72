import React, { Component } from 'react';
import { render } from 'react-dom';

const AppRoot =document.getElementById('app');
const options =['one', 'two'];

class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      options:props.options
    }

    this.RemoveAllDetails = this.RemoveAllDetails.bind(this);
    this.Whattodo = this.Whattodo.bind(this);
    this.AddOption = this.AddOption.bind(this);
    this.RemoveOption = this.RemoveOption.bind(this);
  }

  RemoveOption(option){
    this.setState((prevState) =>({
      options: prevState.options.filter((opt)=> option !== opt )
      //arrow functions can be used in two ways examples with return is below and without using return is above.
      // options: prevState.options.filter((opt)=> {        
      //   return option !== opt 
      // })
    }));
  }

  RemoveAllDetails(){
    this.setState(() =>({options:[]}));
  }

  Whattodo(){
    let selopt= Math.floor(Math.random() * this.state.options.length);
    console.log(selopt)
  }

  AddOption(option){
    if(!option){
      return "Enter some value";
    }
    else if(this.state.options.indexOf(option) > -1){
      return "Item already exists";
    }
    this.setState((prevState) =>({ options:prevState.options.concat([option]) }));
  }
  
  componentDidMount(){
    let options = JSON.parse(localStorage.getItem('options'));
    this.setState(()=> ({options}));
    console.log('componentDidMount');
  }
  
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      let OptJson = JSON.stringify(this.state.options);
      localStorage.setItem('options', OptJson);
      console.log('componentDidUpdate');
    }
  }
  
  componentWillUnmount(){
    console.log('componentDidMount');
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

      <Options defaultoptions={this.state.options} RemoveOption = {this.RemoveOption}/>
      <Addoption AddOption ={this.AddOption}/>
    </div>
    );
  }
}

const Header = (props) =>{
  return (
    <div className="row" align="center">
      <h1> {props.title}</h1>
      <h3> {props.subtitle} </h3>
    </div>
  );
};

//default props are related to component based and used to display the values in the UI below is the example.
//default props are initiated once the component is initiated properly
//default props code will be written below the component

Header.defaultProps = {
  title:'IndecisionApp',
  subtitle: 'React Practice App'
}

const Action = (props)=>{
  return (
    <div className="row" align="center">
      <div className="col-md-4">
      </div>
      <div className="col-md-2">
        <button onClick={props.Whattodo} disabled={!props.hasoptions} className="btn btn-info"> what should i do ? </button>
      </div>
      <div className="col-md-2">
        <button onClick={props.RemoveAllDetails} className="btn btn-danger"> Remove All </button>
      </div>
      <div className="col-md-4">
      </div>
      <br /><br />
    </div>
  );
}

const Options = (props) =>{
  return(
    // <div>
      // <div className="row">
      //   <Option options={props.defaultoptions} RemoveOption={props.RemoveOption}/>
      // </div>
      <div className="row">
        <ol>
          {props.defaultoptions.map((opt)=> <Optionmap key={opt} option ={opt} RemoveOption={props.RemoveOption} /> )}
        </ol>
      </div>
    // </div>
  );
}

const Option = (props) => {
  return(
    <div className="row" align="center">
      <div className="col-md-4">
      </div>
      <div className="col-md-4">
        <ol>           
          {props.options.map((opt) =>{
            return(
              <div className="row"> 
                <div className="col-md-6" align="left">
                  <li key={opt}> item {opt} </li> 
                </div>
                <div className="col-md-6">
                  <button onClick={props.RemoveOption} className="btn btn-danger"> Remove </button>
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

const Optionmap = (props) =>{
  return(
    <div className="row" align="center">
      <div className="col-md-4">
      </div>
      <div className="col-md-4">
        <div className="row"> 
          <div className="col-md-6" align="left">
            <li key={props.option}> item {props.option} </li> 
          </div>
          <div className="col-md-6">
            <button onClick={()=> {
                props.RemoveOption(props.option)
              }} 
            className="btn btn-danger"> Remove </button>
          </div>
          <br/><br/>
        </div>
      </div>
      <div className="col-md-4">
      </div>
    </div>
  );
};

class Addoption extends React.Component {
  constructor(props){
    super(props);
    this.state={
      error:''
    }
    this.SubmitOption = this.SubmitOption.bind(this);
  }

  SubmitOption(e){
    e.preventDefault();
    let option = e.target.elements.opt.value.trim();    
    const error = this.props.AddOption(option);
    this.setState(()=>({ error }));
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
          <div className="row">
            <p> {this.state.error} </p>
          </div>
        </form>
      </div>
    );
  }
}

const User =(props) =>{
  return (
    <div>
      <p> Name: {props.name}</p>
      <p> Age: {props.age} </p>
    </div>
  );
}

const templaterender = () =>{  
  //render(<User name="Surya" age={28} />, AppRoot);
  render(<IndecisionApp options={[]}/>, AppRoot);
}
templaterender();