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


    
    const {
        formState, 
        toggleForms, 
    } = useContext(LoggingFormsContext); //form Visibility


    const navigate = useNavigate();
    const [password, setPassword] = useState(""); //Password control 

    const inputs = useRef([]); 
    const addInputs = el => { //getting form values
        if(el && !inputs.current.includes(el)){
          inputs.current.push(el)
        }
    };

    const handlePassword =  (e) => { //Live strength password check
        e.preventDefault();
        setPassword(e.target.value)
    }

    const lowercaseLetter = /[a-z]/.test(password)
    const uppercaseLetter = /[A-Z]/.test(password)
    const specialCharacter = /[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?]/.test(password)
    const number = /[0-9]/.test(password)
    const passwordLength = password.length >= 8


    const handleSignUpForm = async (e) => {
        e.preventDefault();
        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

        if(!strongPassword.test(password)){
            console.log('weak');
        }else{
            console.log('strong');
        }
    };
    // const formRef = useRef();
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
                onSubmit={handleSignUpForm}
                // ref={formRef}
                >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control ref={addInputs} type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control onChange={handlePassword} ref={addInputs} value={password} type="password" placeholder="Mot de passe" />
                </Form.Group>
                <ul>
                    <li className={passwordLength ? 'text-success' : null}>8 charactères minimum</li>
                    <li className={uppercaseLetter ? 'text-success' : null}>1 lettre majuscule</li>
                    <li className={lowercaseLetter ? 'text-success' : null}>1 lettre minuscule</li>
                    <li className={number ? 'text-success' : null}>1 chiffre minimum</li>
                    <li className={specialCharacter ? 'text-success' : null}>1 charactère spécial</li>
                </ul>
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
