import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Table from 'components/Table';
//import tableRow from 'components/Table';
import 'css/bootstrap.min.css';

export default function PatientInfo(props) {
  return (
    /* fetch('http://localhost:4000/getPatientInfo/aaaaa-2')
       .then(response => response.json())
       .then((data) => {
          ReactDOM.render(<Navbar />, document.getElementById('menu'));
         ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="Patient Info" />, document.getElementById('table-patientinfo'));
    }); */
    // <h1>{props.location.search}</h1>
    // console.log(props.location.search);
    <b>testing 1</b>
  );
}
