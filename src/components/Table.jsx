import React, { Component } from 'react';

export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tableHeaders: this.props.tableHeaders,
      tableData: this.props.tableData,
      caption: this.props.caption,
      border: this.props.border,
      id: this.props.id,
    };
  }

  render() {
    const header = <thead><TableHeader data={this.state.tableHeaders} /></thead>;
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
        <div id={this.state.id || 'form'} />
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