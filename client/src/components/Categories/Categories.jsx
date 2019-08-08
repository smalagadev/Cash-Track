import React from 'react';
import { Button, } from 'reactstrap';
import './Categories.css'

export default class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button color ="info" className = "Food">Food</Button>
        <Button color ="info" className = "Living">Living</Button>
        <Button color = "info" className ="Travel">Travel</Button>
        <Button color = "info" className = "Entertainment">Entertainment</Button>
        <Button color = "info" className  = "Other">Other</Button>
      </React.Fragment>
    );
  }
}