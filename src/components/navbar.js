import { Navbar, Container, Nav } from "react-bootstrap";
import propTypes from "prop-types";

function NavBar(props) {
  const list = props.data;
  return (
    <Navbar bg="dark" variant="dark" className="d-flex">
      <Container>
        <Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
        <Nav className="me-auto">
          {list.map((value) => {
            return (
              <Nav.Link href={value} key={value}>
                {" "}
                {value}{" "}
              </Nav.Link>
            );
          })}
        </Nav>
      </Container>
    </Navbar>
  );
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
