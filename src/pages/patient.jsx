import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Table from 'components/Table';
//import tableRow from 'components/Table';
import 'css/bootstrap.min.css';

fetch('http://localhost:4000/getPatientInfo/aaaaa-2')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Navbar />, document.getElementById('menu'));
    ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="Patient Info" />, document.getElementById('table-patientinfo'));
  });

  fetch('http://localhost:4000/getPatientBilling/aaaaa-2')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="Patient Billing" />, document.getElementById('table-patientbilling'));
  });

  fetch('http://localhost:4000/getPatientImmunization/aaaaa-2')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="Patient Immunization" />, document.getElementById('table-patientimmunization'));
  });

  fetch('http://localhost:4000/getPatientRevisionHistory/aaaaa-2')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="Patient Revision History" />, document.getElementById('table-patientrevisionhistory'));
  });
