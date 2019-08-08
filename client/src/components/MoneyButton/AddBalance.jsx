import React from 'react';
import { Button } from 'reactstrap';
import './AddBalance.css';

export default class Example extends React.Component {
  render() {
    return (
      <div >
        <Button className = "add-money" outline color="success">+</Button>{'.value '}
      </div>
    );
  }
}