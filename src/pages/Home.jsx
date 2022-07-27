import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import SignUpForm from '../components/SignUpForm/SignUpForm';
import PasswordResetForm from '../components/PasswordResetForm/PasswordResetForm';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(https://images.unsplash.com/photo-1589694934898-392904cde3c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2844&q=80)`, backgroundSize: 'cover',
    backgroundPosition: 'center'
}

export default function Home() {

  
  return (
    <div style={style}>
        <LoginForm />
        <SignUpForm />
        <PasswordResetForm />
    </div>
  )
}
