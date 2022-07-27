import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CloseButton } from 'react-bootstrap';
import { useContext } from 'react';
import { LoggingFormsContext } from '../../context/LoggingFormsContext';

const style = {
    width: '350px',
    padding: '1em',
    backgroundColor: '#fff',
    borderRadius: '10px'
}

export default function SignUpForm() {

    const {formState, toggleForms} = useContext(LoggingFormsContext)

return (
    <>
        {formState.signUpForm &&(
            <div 
            style={style}
            >
                <CloseButton
                onClick={() => toggleForms("signIn")}
                />
                <h1 className='text-center'>Inscription</h1>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirmer mot de passe</Form.Label>
                    <Form.Control type="password" placeholder="Confirmer" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Se souvenir de moi" />
                </Form.Group> */}
                <div className="text-center">
                    <Button variant="dark" type="submit">
                    Valider
                    </Button>
                </div>
                {/* <hr />
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
                /> */}
                </Form>
        </div>
        )}
    </>
  )
}
