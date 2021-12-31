import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Employee() {
  const employee = [
    {
      name: "Zain",
      image: "https://avatars.githubusercontent.com/u/26528142?v=4",
    },
    {
      name: "Ali",
      image: "https://avatars.githubusercontent.com/u/26528142?v=4",
    },
    {
      name: "Bokhari",
      image: "https://avatars.githubusercontent.com/u/26528142?v=4",
    },
  ];
  return (
    // DYNAMIC ROUTING
    <div className="d-flex">
      {employee.map((item,index) => {
        return (
          <Card key={index} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Button variant=""><Link to={"/employees/details/" + item.name }>Check Details</Link></Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Employee;
