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
            <th scope="row">{demo.expense[3].date}</th>
            <td>{demo.expense[3].amount}</td>
            <td>{demo.expense[3].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[4].date}</th>
            <td>{demo.expense[4].amount}</td>
            <td>{demo.expense[4].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[5].date}</th>
            <td>{demo.expense[5].amount}</td>
            <td>{demo.expense[5].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[6].date}</th>
            <td>{demo.expense[6].amount}</td>
            <td>{demo.expense[6].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[7].date}</th>
            <td>{demo.expense[7].amount}</td>
            <td>{demo.expense[7].description}</td>
          </tr>
          <tr>
            <th scope="row">{demo.expense[8].date}</th>
            <td>{demo.expense[8].amount}</td>
            <td>{demo.expense[8].description}</td>
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
