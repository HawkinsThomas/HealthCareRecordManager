import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import Table from 'components/Table';
//import tableRow from 'components/Table';
import 'css/bootstrap.min.css';

fetch('http://localhost:3000/allPatients')
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    ReactDOM.render(<Menu />, document.getElementById('menu'));
    ReactDOM.render(<Table border="1" tableData={data.tableData} tableHeaders={data.tableHeaders} caption="All Patients" />, document.getElementById('table'));
  });
