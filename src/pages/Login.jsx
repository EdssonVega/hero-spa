import React, { useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import "./pagesStyles.css";

export const Login = () => {
    const [user, setUser] = useState("Edsson Vega")
    const [password, setPassword] = useState("genericPassword123")
    const [errors, setErrors] = useState({
        user:"",
        password:""
    })

    const onChangeUser = ( e) => {
        setUser(e.target.value)
        console.log(user)
    }

    const onChangePassword = ( e) => {
        setPassword(e.target.value)
    }

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onLogIn = () => {
    if(user !=="Edsson Vega" || password !=="genericPassword123"){
        if(user !== "Edsson Vega"){
            setErrors((prevState) => ({
                    ...prevState, user: "Please use the default user Edsson Vega to sign in"
                })
            )
        } 
        if(password !=="genericPassword123"){
            setErrors((prevState) => ({
                    ...prevState, password: "Please use the default password genericPassword123 to sign in"
                })
            )
        } 
        return}
    login(user);

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
        <label htmlFor="user">User:</label>
        <input id="user" onChange={onChangeUser} type="text" value={user}/>
        {errors.user !== "" && (
            <p className="messageError"> <BsExclamationCircle />{errors.user}</p>
        )}
        <label htmlFor="password">Password:</label>
        <input id="password" onChange={onChangePassword} type="text" value={password}/>
        {errors.password !== "" && (
            <p className="messageError"> <BsExclamationCircle />{errors.password}</p>
        )}
        <button onClick={onLogIn}>
            Sign in now
        </button>
        <p className="bewareCredentials">Just press on the sign in button with those credentials</p>
      </div>
    </div>
  );
};
