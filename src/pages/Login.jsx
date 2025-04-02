import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../auth/context/AuthContext'

export const Login = () => {
    const{login} = useContext(AuthContext)
    const navigate = useNavigate()
    const onLogIn = () => {
        login("Edsson Vega");
        
        navigate("/",{
            replace:true
        })
    }
  return (
    <div>
        <h1>Log in with your account!</h1>
        <button onClick={onLogIn}>
            Log in
        </button>
    </div>
  )
}
