import React, { Component } from 'react';
import { render } from 'react-dom';

import EmployeeDetails from './Components/EmployeeDetails.Component';

export default class EmployeeDetailService extends React.Component {
  //debugger;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      results: []
    };
  }

  baseUrl = 'https://jsonplaceholder.typicode.com/users/';

  componentDidMount() {
    debugger;
    fetch(this.baseUrl, { method: 'Get' })
      .then(res => res.json())
      //.then(res => console.log(res))
      .then(
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            results: result
          });
          console.log(this.state.results)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    //debugger;
    return <p> {this.state.items} </p>;
  }
}