import React, { Component } from 'react';
import { render } from 'react-dom';

const AppRoot =document.getElementById('app');

const templaterender =() =>
{
  const template = (
    <div className="container" align="center">
      <h1> Indecision App</h1>
      <h3> React Practice App </h3>
    </div>
  );
  render(template, AppRoot);
};

templaterender();
