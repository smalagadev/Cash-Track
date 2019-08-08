import React from 'react';
import { Button, } from 'reactstrap';
import './Categories.css'

export default class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button className = "Food">Food</Button>
        <Button className = "Living">Living</Button>
        <Button className ="Travel">Travel</Button>
        <Button className = "Entertainment">Entertainment</Button>
        <Button className  = "Other">Other</Button>
      </React.Fragment>
    );
  }
}