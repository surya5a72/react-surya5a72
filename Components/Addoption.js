import React, { Component } from 'react';
import { render } from 'react-dom';

export class Addoption extends React.Component {
  state = {
      error:undefined
  }

  SubmitOption = (e) => {
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