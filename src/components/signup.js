import logo from "../logo.svg";
import React, { Component } from "react";
import { Form, Button, Container, Row, Col, Badge } from "react-bootstrap";

class Signup extends Component {
  constructor() {
    console.log("Constructor lifecycle");
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }
  // CALLS WHEN DOM IS READY
  componentDidMount() {
    console.log("componentDidMount lifecycle");
  }
  // CALLS WHEN UPDATE ANY STATE AND DOM RE-RENDER
  componentDidUpdate(preProp, preState, snapshot) {
    console.log("componentDidUpdate lifecycle");
    console.log("These are previous props", preProp);
    console.log("These are previous states", preState);
  }
  // USE IF WANT TO STOP RE-RENDERING OF COMPONENT AT CERTAIN CONDITION.
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate lifecycle");
    // return false;  // UPDATE THE STATE BUT RENDER WILL NOT EXECUTE
    return true; // UPDATE THE STATE BUT RENDER WILL EXECUTE
  }
  // CALLS WHEN COMPONENT WILL DESTROY
  componentWillUnmount() {
    console.log("componentWillUnmount lifecycle");
  }
  render() {
    console.log("Render lifecycle");
    console.log("Props", this.props);
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
                <Form.Group className="mb-4" controlId="formBasicName1">
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

                <Form.Group className="mb-4" controlId="formBasicEmail1">
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

                <Form.Group className="mb-3" controlId="formBasicPassword1">
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
