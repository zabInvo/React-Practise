import { Form, Button, Container, Row, Col, Badge } from "react-bootstrap";
import logo from "../logo.svg";
import { useState, useEffect } from "react";

function Login() {
  const [email, setEmail] = useState("zain.ali@invozone.com");
  const [password, setPassword] = useState("");

  // USE STATE CAN BE USED LIKE THIS
  function onChange(e) {
    // setPassword(e.target.value + "SomeThing");
   
    // TO CHECK PREVIOUS VALUE OF STATE USE THIS CALL BACK SYNTAX 
    setPassword((pre)=>{
      console.log("This is Previous Value", pre);
      return e.target.value
    })
  }

  // USE EFFECTS
  useEffect(() => {
    console.log("useEffect Is Working");
  });
  // IF YOU WANT TO USE useState INSIDE useEffect SOME CONDITION MUST BE APPLIED FOR PREVENTING INFINITE LOOP
  // USE EFFECTS ON SPECIFIC STATE
  useEffect(() => {
    console.log("Email useEffect Is Working");
  }, [email]);
  // CONDIONTAL RENDERING IF ELSE
  if (email == "zain.ali@invozone.com") {
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
                    onChange={onChange}
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
  } else {
    return <div></div>;
  }

  //   FUNCTION FOR LOGIN USER
  function loginUser() {
    console.log("this is email", email);
    console.log("this is password", password);
    alert("User Login Successfully");
  }
}

export default Login;
