import React, { Component } from 'react';

import {Header} from './Header';
import {Action} from './Action';
import {Options} from './Options';
import {OptionModal} from './OptionModal';
import {Addoption} from './Addoption';


export class IndecisionApp extends React.Component{
  state = {
      options:this.props.options,
      isModalVisible:false,
      itemval:null
  }

  RemoveOption = (option) =>{
    this.setState((prevState) =>({
      options: prevState.options.filter((opt)=> option !== opt )
      //arrow functions can be used in two ways examples with return is below and without using return is above.
      // options: prevState.options.filter((opt)=> {        
      //   return option !== opt 
      // })
    }));
  }

  RemoveAllDetails = () =>{
    this.setState(() =>({options:[]}));
  }

  Whattodo = (prevState) => {
    let selopt= Math.floor(Math.random() * this.state.options.length);
    this.setState(()=>({ 
      isModalVisible : !prevState.isModalVisible,
      itemval:this.state.options[selopt]
    }));
    console.log(selopt)
  }

  closeModal = () =>{
    this.setState((prevState) => {
      return{
        isModalVisible: !prevState.isModalVisible
      }
    })
  }

  AddOption = (option) => {
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
    if(options){
      this.setState(()=> ({options}));
    }
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
    console.log('componentwillunMount');
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
      <OptionModal showmodal = {this.state.isModalVisible} close={this.closeModal} item={this.state.itemval}>
      <h1> hello</h1>
      </OptionModal>
    </div>
    );
  }
}