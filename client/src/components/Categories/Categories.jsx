import React from 'react';
import { Button, } from 'reactstrap';
import './Categories.css'

export default class Example extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Button style = {{backgroundColor: '#0099cc'}} className = "Food">Food</Button>
        <Button style = {{backgroundColor: '#0099cc'}} color = "" className ="Living">Living</Button>
        <Button style = {{backgroundColor: '#0099cc'}} color = "" className ="Travel">Travel</Button>
        <Button style = {{backgroundColor:'#0099cc'}} color = "" className = "Entertainment">Entertainment</Button>
        <Button style = {{backgroundColor: '#0099cc'}} color = "" className  = "Other">Other</Button>
      </React.Fragment>
    );
  }
}