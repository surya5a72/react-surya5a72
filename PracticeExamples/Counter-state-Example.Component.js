import React, { Component } from 'react';
import { render } from 'react-dom';

const AppRoot =document.getElementById('app');
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){
    
    return(
      <div>
        <Count count={this.state.count}/>
      </div>
    );
  }
}

class Count extends React.Component{
  constructor(props){
    super(props);
    this.addCount = this.addCount.bind(this);
    this.removecount = this.removecount.bind(this);
    this.reset = this.reset.bind(this);
    this.state={
      count:0
    }
  }
  addCount(){
    this.setState((prevState) => {
      return{
        count: prevState.count + 1
      };
    });
  }
  removecount(){
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
      };
    });
  }
  reset(){
    this.setState({
        count: 0      
    });
  }
  render(){
    console.log(this.props.count)
    return(
      <div>
        <h1>count : {this.state.count} </h1>
        <button onClick={this.addCount} className="btn btn-success">+1</button> &nbsp; &nbsp; &nbsp;
        <button onClick={this.removecount} className="btn btn-info">-1</button> &nbsp; &nbsp; &nbsp;
        <button onClick={this.reset} className="btn btn-danger">Reset</button> &nbsp; &nbsp; &nbsp;
      </div>
    );
  }
}

render(<Count />, AppRoot);
