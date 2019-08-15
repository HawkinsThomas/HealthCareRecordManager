import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'components/Navbar';
import Form from 'components/Form';
import 'css/bootstrap.min.css';

const formData = {
  method: 'get',
  action: '/',
  fields: [
    {
      id: 'firstName',
      label: 'First Name: ',
      type: 'text',
      name: 'firstName',
    },
    {
      id: 'lastName',
      label: 'Last Name: ',
      type: 'text',
      name: 'lastName',
    },
    {
      id: 'email',
      label: 'Email : ',
      type: 'text',
      name: 'email',
    },
  ],
};

ReactDOM.render(<Navbar />, document.getElementById('menu'));
ReactDOM.render(<Form fields={formData.fields} action={formData.action} method={formData.method} />, document.getElementById('form'));
