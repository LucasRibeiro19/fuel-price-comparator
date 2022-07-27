import { createContext } from "react";
import { useState } from "react";


export const LoggingFormsContext = createContext()

export const LoggingFormsContextProvider = ({children}) => {

    //Forms visibility management
    const [formState, setFormState] = useState({
        signInForm: true,
        signUpForm: false
    })

    const toggleForms = (form) =>{
        if(form === "signIn"){
            setFormState({
                signInForm: true,
                signUpForm: false
            })
        }else if(form === "signUp"){
            setFormState({
                signInForm: false,
                signUpForm: true
            })
        }
    };

    return(
        <LoggingFormsContext.Provider 
        value= {{
            formState,
            toggleForms
        }}>
            {children}
        </LoggingFormsContext.Provider>
    )

}