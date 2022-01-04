import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button } from "react-bootstrap";

function Company() {
  const dispatch = useDispatch();

  // DELETE COMPANY FUNCTION
  const deleteCompanyById = (id) => {
    dispatch({ type: "DELETE_COMPANY_REQUEST", id });
  };

  useEffect(() => {
    dispatch({ type: "FETCH_COMPANIES_REQUEST" });
  }, []);

  const company = useSelector((state) => state.adminReducer.companies);

  const renderList = company.map((item) => {
    return (
      <div key={item.id}>
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {item.address}
            </Card.Subtitle>
            <Card.Text>{item.type}</Card.Text>
            <Button className="mb-2">Update Company</Button>
            <Button onClick={() => deleteCompanyById(item.id)}>
              Delete Company
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

export default Company;
