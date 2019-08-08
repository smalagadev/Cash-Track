import React from 'react';
import { Table } from 'reactstrap';
import './Logs.css';
import  demo from '../../demo';

export default class Example extends React.Component {
  render() {
    return (
      <Table hover className = "show-logs">
        <thead>
          <tr>
            <th>#</th>
            <th>Amount Spent</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{demo.user.first}</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}