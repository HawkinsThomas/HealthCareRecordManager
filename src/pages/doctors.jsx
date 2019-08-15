import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Table from 'components/Table';
//import tableRow from 'components/Table';
import 'css/bootstrap.min.css';

const formActions = {
  add: '/',
  update: '/',
  delete: '/',
};

fetch('http://localhost:4000/allUsers')
  .then(response => response.json())
  .then((data) => {
    ReactDOM.render(<Navbar />, document.getElementById('menu'));
    ReactDOM.render(<Table
      border="1" tableData={data.tableData}
      tableHeaders={data.tableHeaders}
      caption="All Users"
      formActions={formActions}
    />,
    document.getElementById('table'));
  });
