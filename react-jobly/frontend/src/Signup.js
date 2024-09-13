import React, { useState } from "react";
import JoblyApi from "./JoblyApi";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const INITIAL_STATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [newUserInfo, setNewUserInfo] = useState(INITIAL_STATE);
  const [errorArr, setErrorArr] = useState([]);

  function handleChange(e) {
    let name = e.target.id;
    let value = e.target.value;
    setNewUserInfo((info) => ({ ...info, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await JoblyApi.register(newUserInfo);
      sessionStorage.setItem("token", res);
      sessionStorage.setItem("username", newUserInfo.username);
      navigate("/");
    } catch (e) {
      setErrorArr([e]);
    }
  }

  function renderErrorHtml() {
    return errorArr.map((err) => {
      return <div>{err}</div>;
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={handleChange}
          value={newUserInfo.username}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={newUserInfo.password}
        ></input>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          onChange={handleChange}
          value={newUserInfo.firstName}
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          onChange={handleChange}
          value={newUserInfo.lastName}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          value={newUserInfo.email}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {renderErrorHtml()}
    </div>
  );
}

export default Signup;
