import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";
import Company from "./components/company";
import Employee from "./components/employee";
import EmployeeDetails from "./components/employeesDetails";
import PageNotFound from "./components/pageNotFound"

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar
        brand="EMS"
        data={[
          "Company",
          "Employees",
          "Attendance",
          "Salary",
          "About",
          "Contact Us",
          "Signup",
        ]}
      />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/signup"
          element={<Signup data="Testing Prop In Class" />}
        />
        <Route path="/company" element={<Company />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employees/details/:id" element={<EmployeeDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
