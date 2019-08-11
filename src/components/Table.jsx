import React, { Component } from 'react';

export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headers: this.props.tableHeaders,
      tableData: this.props.tableData,
      caption: this.props.caption,
      border: this.props.border,
    };
  }

  render() {
    const header = <thead><TableHeader data={this.props.tableHeaders} /></thead>;
    const rows = this.props.tableData.map((rowData) => {
      return (
        <TableRow data={rowData} />
      );
    });
    return (
      <table border={this.props.border}>
        <caption>{this.props.caption}</caption>
        {header}
        {rows}
      </table>

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