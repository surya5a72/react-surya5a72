import React, { Component } from 'react';
import { render } from 'react-dom';

import {Option, Optionmap} from './Option';

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

export {Options};