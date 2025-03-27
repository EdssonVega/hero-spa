import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()
    const onLogIn = () => {
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
