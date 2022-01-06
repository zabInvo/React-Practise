import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

function Employee() {
  const dispatch = useDispatch();

  // DELETE COMPANY FUNCTION
  const deleteUserById = (id) => {
    dispatch({ type: "DELETE_USER_REQUEST", id });
  };

  useEffect(() => {
    dispatch({ type: "FETCH_USERS_REQUEST", companyId: 18 });
  }, []);

  const users = useSelector((state) => state.userReducer.users ? state.userReducer.users : []);

  const renderList = users.map((item) => {
    return (
      <div key={item.id}>
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.email}
            </Card.Subtitle>
            <Card.Text>{item.type}</Card.Text>
            <Button variant="danger" onClick={() => deleteUserById(item.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <>
      <div className="d-flex mt-2 mr-2">{renderList}</div>
    </>
  );
}

export default Employee;
