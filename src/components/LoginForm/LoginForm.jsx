import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import GoogleButton from 'react-google-button';


const style = {
    width: '350px',
    padding: '1em',
    backgroundColor: '#fff',
    borderRadius: '10px'
}

function LoginForm() {
  return (
    <div 
    style={style}
    >
      <h1 className='text-center'>Connexion</h1>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Se souvenir de moi" />
      </Form.Group>
      <div className="text-center">
        <Button variant="dark" type="submit">
          Se connecter
        </Button>
      </div>
    <hr />
      <p 
      className='text-center'
      style={{cursor:'pointer', textDecoration: 'underline'}}
      >
        Créer un compte
      </p>
      <p className='text-center'>Ou</p>
      <GoogleButton 
      type='light'
      label='Connectez vous avec Google'
      style={{width:'100%'}}
      />
    </Form>
    </div>
  )
}

export default LoginForm