import React, { useState } from "react";
import Header from "./Header";
import "./Login.css";

function Login() {
  const [isSignInform, setIssignInform] = useState(true);

  const toggleForm = () => {
    setIssignInform(!isSignInform);
  };
  return (
    <>
      <Header />
      <div className="loginImg h-auto ">
       

        <form className="   ">
          <h1 className="bold p-2 m-2">
            {isSignInform ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInform && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 my-3"
            ></input>
          )}
          <input type="text" placeholder="Email" className="p-3 my-3 "></input>
          <input
            type="password"
            placeholder="Password"
            className="p-3 my-3 "
          ></input>
          <button className="p-3 my-2 bg-red-950 ">
            {" "}
            {isSignInform ? "Sign In" : "Sign Up"}
          </button>

          <p onClick={toggleForm}>
            {isSignInform
              ? "New to Netflix? Sign up now."
              : "Already Registered Sign In Now"}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
