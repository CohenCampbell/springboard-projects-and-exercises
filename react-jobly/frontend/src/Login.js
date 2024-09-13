import React, { useState } from "react";
import JoblyApi from "./JoblyApi";
import { useNavigate } from "react-router-dom";

function Login() {
  const INITIAL_STATE = { username: "", password: "" };
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(INITIAL_STATE);
  const [errorArr, setErrorArr] = useState([]);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setUserInfo((info) => ({ ...info, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await JoblyApi.login(userInfo);
      sessionStorage.setItem("token", res);
      sessionStorage.setItem("username", userInfo.username);
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
          name="username"
          onChange={handleChange}
          value={userInfo.username}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          onChange={handleChange}
          value={userInfo.password}
          name="password"
        ></input>
        <button type="submit">Login</button>
      </form>
      {renderErrorHtml()}
    </div>
  );
}

export default Login;
