import React from 'react';
import { Form, Input } from 'reactstrap';
import './ShowBalance.css'

export default class Example extends React.Component {
  render() {
    return (
      <Form className = "showBal">
        <Input placeholder="$0.00" bsSize="" />
      </Form>
    );
    }
}