import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const AppRoot =document.getElementById('app');

let options =['one', 'two'];

const SubmitDetails = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(option){
    options.push(option);
    e.target.elements.option.value =null;
    formrender();
  }
}

const orderlist = () =>{
  return <ol> {options.map((opt) => <li key={opt}> item {opt}</li>)} </ol>;
}

const selectoption = () => {
  let selopt = Math.floor(Math.random()*options.length);
  alert(options[selopt]);
  //console.log(selopt);  
}

const formrender = () =>{
  const template = (
    <div className="wrapper">
      <h1> Indecision App</h1>
      <h3> React Practice App </h3>
      <button id="btnremove" onClick={() => {options = []; formrender();}} className="btn btn-danger"> Remove All </button>
      <button disabled={options.length === 0} id="btntest" onClick={selectoption} className="btn btn-primary"> Select </button>
       {/*orderlist()*/}
      <ol> 
        { options.map((opt) => 
            <li key={opt}> item {opt}</li>
          )
        } 
      </ol>
      <ol>
        { options.map((opt) => {
            return <li key={opt}> item {opt}</li>
        })
        } 
      </ol>
      <form onSubmit={SubmitDetails}>
        <div className="col-md-12">    
          <div className="col-md-4" style={{padding: 0}}>
            <div className="col-md-10" style={{padding: 0}}>
              <input type="text" id="option" name="option" className="form-control" />
            </div>
            <div className="col-md-2">
              <button id="btnsubmit" className="btn btn-success"> Submit </button>
            </div>
          </div>
          <div className="col-md-4">
          dsfad
          </div>      
          <div className="col-md-4">
          dfsadsfa
          </div>
        </div>
      </form>
    </div>
  );
  render(template, AppRoot);
}

formrender();