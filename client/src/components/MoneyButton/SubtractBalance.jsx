import React from 'react';
import { Button } from 'reactstrap';
import './SubtractBalance.css';

export default class Example extends React.Component {
  render() {
    return (
      <div >
        <Button className = "subtract-money" outline color="danger">-</Button>{' '}
      </div>
    );
  }
}