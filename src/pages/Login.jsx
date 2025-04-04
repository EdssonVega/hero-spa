import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import "./pagesStyles.css";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogIn = () => {
    login("Edsson Vega");

    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="loginPageContainer">
        <div>
        <h1>Welcome <br /> Back!</h1>
        <p>Be prepare to see the mighty heros of the universe!</p>
        <p>and don't forget to contact me:</p>
        </div>
      <div className="loginForm">
        <label htmlFor="">User:</label>
        <input type="text" />
        <label htmlFor="">Password:</label>
        <input type="password" />
        <button onClick={onLogIn}>Log in</button>
      </div>
    </div>
  );
};
