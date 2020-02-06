import React, { Component } from 'react';
import { render } from 'react-dom';

const Action = (props)=> (
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


export {Action};