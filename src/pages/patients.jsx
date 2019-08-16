import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Table from 'components/Table';
import 'css/styles.css';
import 'css/bootstrap.min.css';

const formActions = {
  add: '/',
  update: '/',
  delete: '/',
};

fetch('http://localhost:4000/allPatients')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Navbar />, document.getElementById('menu'));
    ReactDOM.render(<Table
      border="1"
      tableData={data.tableData}
      tableHeaders={data.tableHeaders}
      caption="All Patients"
      formActions={formActions}
    />,
    document.getElementById('table'));
  });
