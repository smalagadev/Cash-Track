import React from 'react';
import { Table } from 'reactstrap';
import './Logs.css';
import demo from '../../demo.js';

export default class Example extends React.Component {
  render() {
    return (
      <Table hover className = "show-logs">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount Spent</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{demo.expense[0].date}</th>
            <td>{demo.expense[0].amount}</td>
            <td>{demo.expense[0].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[1].date}</th>
            <td>{demo.expense[1].amount}</td>
            <td>{demo.expense[1].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[2].date}</th>
            <td>{demo.expense[2].amount}</td>
            <td>{demo.expense[2].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[9].date}</th>
            <td>{demo.expense[9].amount}</td>
            <td>{demo.expense[9].description}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
