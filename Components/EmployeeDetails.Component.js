import React, { Component } from 'react';
import { render } from 'react-dom';
import EmployeeDetailService from './Services/EmployeeDetailService';

export default class EmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
  }
    render(){
    return <Form emplo={this.props.EmployeeDetails}/>;
  }
}

var Form = (props) => (<table><thead><tr><th colSpan='3'>Number of emps:{props.emplo.length}</th></tr></thead>    {props.emplo.map((emp) => <tbody align="left"><tr key={emp.id}><th key={emp.id}>Id</th><th>:</th><th><a>{emp.id} </a></th></tr><tr><th>Name</th><th>:</th> {emp.name}</tr><tr><th>Username</th><th>:</th> {emp.username}</tr><tr><th>Email-Id</th><th>:</th>{emp.email}</tr><tr><th>Address</th><th>:</th><th>Street</th><th>:</th>{emp.address.street}</tr><tr><th></th><th></th><th>Suite</th><th>:</th>{emp.address.suite}</tr>        <tr><th></th><th></th><th>City</th><th>:</th>{emp.address.city}</tr><tr><th></th><th></th><th>ZipCode</th><th>:</th>{emp.address.zipcode}</tr>    <tr><th></th><th></th><th>Geo</th><th>:</th><th>Lat</th><th>:</th>{emp.address.geo.lat}</tr><tr><th></th><th></th><th></th><th>:</th><th>Lng</th><th>:</th>{emp.address.geo.lng}</tr><tr><th>Phone</th><th>:</th>{emp.phone}</tr><tr><th>Website</th><th>:</th> {emp.website}</tr><tr><th>Company</th><th>:</th><th>Name</th><th>:</th> {emp.company.name}</tr> <tr><th></th><th></th><th>CatchPhrase</th><th>:</th>{emp.company.catchPhrase}</tr> <tr><th></th><th></th><th>BS</th><th>:</th>{emp.company.bs}</tr></tbody>)}  </table>);