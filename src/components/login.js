import { Form, Button, Container, Row, Col, Badge } from "react-bootstrap";
import logo from "../logo.svg";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col sm={12}>
            <h1 className="mt-3 mb-2">
              Employee Managment System <Badge bg="primary">LOGIN</Badge>
            </h1>
            <img src={logo} className="App-logo" alt="logo" />
          </Col>
          <Col md={6}>
            <Form className="mb-4">
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={loginUser}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
  //   FUNCTION FOR LOGIN USER
  function loginUser() {
    console.log("this is email", email);
    console.log("this is password", password);
    alert("User Login Successfully");
  }
}

export default Login;
