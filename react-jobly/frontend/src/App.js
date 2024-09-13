import React, { useEffect } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import CompanyList from "./ComanyList";
import CompanyDetails from "./CompanyDetails";
import JobList from "./JobList";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Welcome from "./Welcome";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const publicPaths = ["/login", "/signup", "/welcome"];

    if (!token && !publicPaths.includes(location.pathname))
      navigate("/welcome");
  }, [navigate, location.pathname]);

  function renderNavHtml() {
    const token = sessionStorage.getItem("token");
    if (!token) {
      return (
        <nav>
          <div>
            <Link to="/welcome" id="HomeNavLink">
              Jobly
            </Link>
            <Link to="/signup">
              <span>Signup</span>
            </Link>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
        </nav>
      );
    }
    return (
      <nav>
        <div>
          <Link to="/" id="HomeNavLink">
            Jobly
          </Link>
          <Link to="/companies">
            <span>Companies</span>
          </Link>
          <Link to="/jobs">
            <span>Jobs</span>
          </Link>
          <Link to="/profile">
            <span>Profile</span>
          </Link>
          <Link to="/welcome">
            <span onClick={handleLogout}>Logout</span>
          </Link>
        </div>
      </nav>
    );
  }

  function handleLogout() {
    sessionStorage.removeItem("token");
  }

  return (
    <div className="App">
      {renderNavHtml()}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetails />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
