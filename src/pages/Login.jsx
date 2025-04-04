import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
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
        <p>and feel free to contact me:</p>
        <a href="https://wa.me/77926661" target="_blank">
        <FaWhatsapp className="contacLogos"/>
        </a>
        <a href="https://www.linkedin.com/in/edsson-edmundo-vega-torrico-432705303/" target="_blank">
        <FaLinkedinIn className="contacLogos"/>
        </a>
        </div>
      <div className="loginForm">
        <h2>Sign in</h2>
        <label htmlFor="">User:</label>
        <input type="text" />
        <label htmlFor="">Password:</label>
        <input type="password" />
        <button onClick={onLogIn}>
            Sign in now
        </button>
        <p>Just press on the log in button with those credentials</p>
      </div>
    </div>
  );
};
