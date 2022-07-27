import React, {useContext} from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { CloseButton } from 'react-bootstrap';
import { LoggingFormsContext } from '../../context/LoggingFormsContext';

const style = {
    width: '350px',
    padding: '1em',
    backgroundColor: '#fff',
    borderRadius: '10px'
};

function PasswordResetForm() {

    const {formState, toggleForms} = useContext(LoggingFormsContext);


  return (
    <>
        {formState.resetPwdForm && (
             <div 
             style={style}
             >
                 <CloseButton
                 onClick={() => toggleForms("signIn")}
                 />
                 <h1 className='text-center'>Mot de passe oublié</h1>
                 <Form>
                 <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" placeholder="Email" />
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

export default PasswordResetForm