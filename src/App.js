import "./App.css";
import Navbar from "./components/navbar";
import Login from "./components/login";
import Signup from "./components/signup";

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
        ]}
      />
      <Login />
      {/* <Signup /> */}
    </div>
  );
}

export default App;
