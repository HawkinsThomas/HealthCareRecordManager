import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="patients.html">Patients</a></li>
        <li><a href="login.html">Login</a></li>
      </ul>
    );
  }
}
