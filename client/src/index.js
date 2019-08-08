import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "./components/LogIn.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <h3>
                <u>Welcome</u>
              </h3>
              <hr />
              <Card>
                <CardBody>
                  <LoginForm />
                </CardBody>
              </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

import ReactDom from 'react-dom';
import App from './App.js'

ReactDom.render(<App />, document.getElementById('root'));
