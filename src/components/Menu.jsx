import React, { Component } from 'react';

export default function Menu(props) {
  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="index.html">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="login.html">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" href="patients.html">Patients</a>
      </li>
    </ul>
  );
}
