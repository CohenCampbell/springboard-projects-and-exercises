import React, { useEffect, useState } from "react";
import JoblyApi from "./JoblyApi";

function Profile() {
  const [userInfo, setUserInfo] = useState({});
  const [errorArr, setErrorArr] = useState([]);

  useEffect(() => {
    async function grabUser() {
      const username = sessionStorage.getItem("username");
      const res = await JoblyApi.getUser(username);
      const INITIAL_VALUE = {
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
      };
      console.log(INITIAL_VALUE);
      setUserInfo(INITIAL_VALUE);
    }
    grabUser();
  }, []);

  function handleChange(e) {
    let { name, value } = e.target;
    setUserInfo((info) => ({ ...info, [name]: value }));
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const res = await JoblyApi.updateUser(userInfo);
      setUserInfo(res);
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
          name="username"
          value={sessionStorage.getItem("username")}
          id="username"
          readOnly
        ></input>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={handleChange}
          value={userInfo.firstName || ""}
          name="firstName"
          id="firstName"
        ></input>
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={handleChange}
          value={userInfo.lastName || ""}
          name="lastName"
          id="lastName"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={userInfo.email || ""}
          name="email"
          id="email"
          type="email"
        ></input>
        <button type="submit">Update</button>
      </form>
      {renderErrorHtml()}
    </div>
  );
}

export default Profile;
