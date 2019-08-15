import React, { Component } from 'react';
import Form from 'components/Form'

export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHeaders: this.props.tableHeaders,
      tableData: this.props.tableData,
      caption: this.props.caption,
      border: this.props.border,
      id: this.props.id,
      formActions: {
        add: this.props.formActions.add,
        update: this.props.formActions.update,
        delete: this.props.formActions.delete,
      },
      formVisible: false,
    };
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onClickAdd() {
    this.setState({ formVisible: !this.state.formVisible });
  }

  render() {
    const header = <thead><TableHeader data={this.state.tableHeaders} /></thead>;
    const fields = this.state.tableHeaders.map((header) => {
      return (
        {
          id: header,
          label: `${header}: `,
          type: 'text',
          name: header,
        }
      );
    });
    const rows = this.state.tableData.map((rowData) => {
      return (
        <TableRow data={rowData} />
      );
    });
    return (
      <div>
        <table border={this.state.border}>
          <caption>{this.state.caption}</caption>
          {header}
          {rows}
        </table>
        <button type="button" onClick={this.onClickAdd}>Add Row</button>
        <div id={this.state.id || 'form'}>
        {this.state.formVisible ? <Form action={this.state.formActions.add} method="post" fields={fields} /> : null }
        </div>
      </div>

    );
  }
}

function TableRow(props) {
  const data = props.data.map((data, index) => {
    return (
      <td key={index}>{data}</td>
    );
  });
  return (
    <tr key={props.index}>
      {data}
    </tr>
  );
}

function TableHeader(props) {
  const data = props.data.map((data, index) => {
    return (
      <td key={index}><h5>{data}</h5></td>
    );
  });
  return (
    <tr key={props.index}>
      {data}
    </tr>
  );
}