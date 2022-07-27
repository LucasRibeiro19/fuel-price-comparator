import React, { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { LoggingFormsContext } from '../../context/LoggingFormsContext';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { CloseButton } from 'react-bootstrap';

const style = {
    width: '350px',
    padding: '1em',
    backgroundColor: '#fff',
    borderRadius: '10px'
};

export default function SignUpForm() {

    const {formState, toggleForms} = useContext(LoggingFormsContext);
    const navigate = useNavigate();
    const [validation, setValidation] = useState("");

    const inputs = useRef([]);
    const addInputs = el => {
        if(el && !inputs.current.includes(el)){
          inputs.current.push(el)
        }
    };

    
    
    const formRef = useRef();
    console.log(formRef);

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
                <Form
                ref={formRef}
                >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={addInputs} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control ref={addInputs} type="password" placeholder="Mot de passe" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirmer mot de passe</Form.Label>
                    <Form.Control ref={addInputs} type="password" placeholder="Confirmer" />
                </Form.Group>
                <div className="text-center">
                    <Button variant="dark" type="submit">
                    Valider
                    </Button>
                </div>
                </Form>
        </div>
        )}
    </>
  )
}
