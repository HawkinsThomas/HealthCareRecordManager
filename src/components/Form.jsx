import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: this.props.fields,
      // data: this.props.data,
      action: this.props.action,
      method: this.props.method,
      className: this.props.sclassName,
    };
  }

  render() {
    const fields = this.state.fields.map((field) => {
      return (
        <Field id={field.id} label={field.label} type={field.type} name={field.name} />
      );
    });
    return (
      <form className={this.state.className} action={this.state.action} method={this.state.method}>
        {fields}
      </form>
    );
  }
}


function Field(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} id={props.id} name={props.name} />
    </div>
  );
}
