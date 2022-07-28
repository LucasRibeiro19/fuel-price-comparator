import { createContext } from "react";
import { useState } from "react";


export const LoggingFormsContext = createContext()

export const LoggingFormsContextProvider = ({children}) => {

    //Forms visibility management
    const [formState, setFormState] = useState({
        signInForm: true,
        signUpForm: false,
        resetPwdForm: false
    })

    const toggleForms = (form) =>{
        if(form === "signIn"){
            setFormState({
                signInForm: true,
                signUpForm: false,
                resetPwdForm: false
            })
        }else if(form === "signUp"){
            setFormState({
                signInForm: false,
                signUpForm: true,
                resetPwdForm: false
            })
        }else if(form === "resetPwd"){
            setFormState({
                signInForm: false,
                signUpForm: false,
                resetPwdForm: true
            })
        }
    };

    //Password Check ?

    return(
        <LoggingFormsContext.Provider 
        value= {{
            formState,
            toggleForms,
        }}>
            {children}
        </LoggingFormsContext.Provider>
    )

}