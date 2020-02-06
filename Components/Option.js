import React, { Component } from 'react';
import { render } from 'react-dom';

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

const Optionmap = (props) =>(
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

export {Option, Optionmap};