import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <h1>Welcome to Jobly, please signup/login!</h1>
      <Link to={"/signup"}>
        <button>Signup</button>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Welcome;
