import { useParams } from "react-router-dom";

function EmployeeDetails() {
  return (
    <div className="mt-5">
      <b> This Is {useParams().id} Details</b>
    </div>
  );
}

export default EmployeeDetails;
