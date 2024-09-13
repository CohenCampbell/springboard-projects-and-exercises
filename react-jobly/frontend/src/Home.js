import React, { useEffect } from "react";
import JoblyApi from "./JoblyApi";

function Home() {
  return (
    <div>
      <h1>Jobly</h1>
      <h3>All the jobs in one, convenient place.</h3>
      <h2>{`Welcome Back, ${sessionStorage.getItem("username")}`}</h2>
    </div>
  );
}

export default Home;
