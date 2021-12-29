import logo from "../logo.svg";
import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Badge } from "react-bootstrap";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  render() {
    return (
      <>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col sm={12}>
              <h1 className="mt-3 mb-2">
                Employee Managment System <Badge bg="warning">SIGN UP</Badge>
              </h1>
              <img src={logo} className="App-logo" alt="logo" />
            </Col>
            <Col md={6}>
              <Form className="mb-4">
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={this.name}
                    onChange={(event) =>
                      this.setState({ name: event.target.value })
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={this.email}
                    onChange={(event) =>
                      this.setState({ email: event.target.value })
                    }
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={this.password}
                    onChange={(event) =>
                      this.setState({ password: event.target.value })
                    }
                  />
                </Form.Group>
                <Button variant="primary">Signup</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Signup;
