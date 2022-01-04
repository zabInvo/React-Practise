import { Navbar, Container, Nav } from "react-bootstrap";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";

import authContext from "../context/authContext";

function NavBar(props) {
  const list = props.data;

  // DEFINE CONTEXT OF USER
  const user = useContext(authContext);

  if (user.state.isLoggedIn === true || user.state.isLoggedIn === false) {
    return (
      <Navbar bg="dark" variant="dark" className="d-flex">
        <Container>
          <Navbar.Brand>
            <Link to="/">{props.brand} </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            {list.map((value) => {
              return (
                <Nav.Link to={"/" + value} key={value} as={Link}>
                  {value}
                </Nav.Link>
              );
            })}
          </Nav>
        </Container>
      </Navbar>
    );
  } else {
    return <div></div>;
  }
}

// CHECK PROPS TYPE
NavBar.propTypes = {
  brand: propTypes.string.isRequired,
  data: propTypes.array,
};

// ASSIGN BY DEFAULT VALUE FOR BRAND PROP
NavBar.defaultProps = {
  brand: "Employee Managment System",
};

export default NavBar;
