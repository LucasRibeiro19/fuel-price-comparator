import React, { useContext, useState} from 'react';
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
    
    
    const {signUp} = useContext(UserContext);
    
    
    const {
        formState, 
        toggleForms, 
    } = useContext(LoggingFormsContext); //form Visibility
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); //Password control 
    const [repeatPassword, setRepeatPassword] = useState(""); //Confirm password control 
    const [signupErr, setSignupErr] = useState(""); // Form submit error manager
    
    const navigate = useNavigate();
    const closeBtnClick = () => { // Close button click actions
        toggleForms("signIn");
        resetFields();
    };

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };

    const handlePassword =  (e) => { //Live strength password check
        e.preventDefault();
        setPassword(e.target.value);
    };
    
    const handleRepeatPassword = (e) => {
        e.preventDefault();
        setRepeatPassword(e.target.value);
    };

    const containsLowercase = /[a-z]/.test(password); //password lowercase check
    const containsUppercase = /[A-Z]/.test(password); //password uppercase check
    const containsSpecialCharacter = /[^A-Za-z0-9]/.test(password); //password special char check
    const containsNumber = /[0-9]/.test(password); //password number check
    const passwordLength = password.length >= 8; //password length check
    const strongPasswordRegExp = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'); //check critereas
    const strongPasswordTest = strongPasswordRegExp.test(password);
    const passwordsMatches = (repeatPassword !== '') && repeatPassword === password; // Password confirm match test 

    const resetFields = () =>{
        setEmail("");
        setPassword("");
        setRepeatPassword("");
    };

    const handleSubmit = async (e) => { //Submit signup form
        e.preventDefault();

        if(!strongPasswordTest){
            return;
        };

        if(!passwordsMatches){
            return;
        }

        try{

            const cred = await signUp(
                email,
                password
            );

            console.log(cred);
            resetFields();
            toggleForms("signIn");

        }catch(err){
            if(err.code === "auth/invalid-email"){
                setSignupErr("Format d'adresse invalide")
            }
            if(err.code === "auth/email-already-in-use"){
                setSignupErr("Cette adresse est déja utilisée")
            }
        }

    };


return (
    <>
        {formState.signUpForm &&(
            <div 
            style={style}
            >
                <CloseButton
                onClick={closeBtnClick}
                />
                <h1 className='text-center'>Inscription</h1>
                <Form
                onSubmit={handleSubmit}
                >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmail} required />
                    <p className='text-center text-danger'>{signupErr}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCreatePassword">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control className={strongPasswordTest ? 'form-control is-valid' : null} onChange={handlePassword} value={password} type="password" placeholder="Mot de passe" />
                </Form.Group>
                <ul>
                    <li className={passwordLength ? 'text-success' : null}>8 charactères minimum</li>
                    <li className={containsUppercase ? 'text-success' : null}>1 lettre majuscule</li>
                    <li className={containsLowercase ? 'text-success' : null}>1 lettre minuscule</li>
                    <li className={containsNumber ? 'text-success' : null}>1 chiffre minimum</li>
                    <li className={containsSpecialCharacter ? 'text-success' : null}>1 charactère spécial</li>
                </ul>
                <Form.Group className="mb-3" controlId="formRepeatPassword">
                    <Form.Label>Confirmer mot de passe</Form.Label>
                    <Form.Control className={passwordsMatches ? 'form-control is-valid' : 'form-control is-invalid'} onChange={handleRepeatPassword} type="password" value={repeatPassword} placeholder="Confirmer" />
                </Form.Group>
                <div className="text-center">
                    <Button className={passwordsMatches ? null : 'disabled'} variant="dark" type="submit">
                    Valider
                    </Button>
                </div>
                </Form>
        </div>
        )}
    </>
  )
}
