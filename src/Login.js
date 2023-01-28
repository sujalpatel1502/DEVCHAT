import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import {auth, provider} from './firebase';
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
            dispatch({
                type : actionTypes.SET_USER,
                user: result.user,
            });
        })
        .catch((error) => {
            alert(error.message);
        });
    }
  return (
    <div className='login'>
      <div className='login__container'>
        <img src='https://cdn.pixabay.com/photo/2014/04/02/17/08/globe-308065_1280.png' alt=''/>
        <h1>Sign in to DevChat</h1>
        <p>devchat.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  )
}

export default Login
