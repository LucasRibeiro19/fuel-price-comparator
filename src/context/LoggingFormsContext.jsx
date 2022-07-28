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

    //Password Check

    const [lengthPwdController, setLenghtPwdController] = useState(false);
    const [upperCasePwdController, setUpperCasePwdController] = useState(false);
    const [lowerCasePwdController, setLowerCasePwdController] = useState(false);
    const [numberPwdController, setNumberPwdController] = useState(false);
    const [specialCharPwdController, setSpecialCharPwdController] = useState(false);
    
    const lengthCheck = (pwd) => {
        if (pwd.length >= 8) {
            setLenghtPwdController(true)
        }else if(pwd.length === 0){
            setLenghtPwdController(false)
        }else{
            setLenghtPwdController(false)
        }
    };

    const upperCaseCheck = (pwd) => {

        if (pwd.match(/[A-Z]/g)) {
            setUpperCasePwdController(true)
        }else if(pwd.length === 0){
            setUpperCasePwdController(false)
        }else{
            setUpperCasePwdController(false)
        }
    };

    const lowerCaseCheck = (pwd) => {

        if (pwd.match(/[a-z]/g)) {
            setLowerCasePwdController(true)
        }else if(pwd.length === 0){
            setLowerCasePwdController(false)
        }else{
            setLowerCasePwdController(false)
        }
    };

    const numberCheck = (pwd) => {

        if (pwd.match(/[0-9]/g)) {
            setNumberPwdController(true)
        }else if(pwd.length === 0){
            setNumberPwdController(false)
        }else{
            setNumberPwdController(false)
        }
    };

    const specialCharCheck = (pwd) => {

        if (pwd.match(/[^A-Za-z0-9]/g)) {
            setSpecialCharPwdController(true)
        }else if(pwd.length === 0){
            setSpecialCharPwdController(false)
        }else{
            setSpecialCharPwdController(false)
        }
    };

    const passwordCheck = (pwd) => {
        lengthCheck(pwd)
        upperCaseCheck(pwd)
        lowerCaseCheck(pwd)
        numberCheck(pwd)
        specialCharCheck(pwd)
    };

    // console.log('longueur' + lengthPwdController);
    console.log('maj' + upperCasePwdController);
    // console.log('min' + lowerCasePwdController);
    // console.log('nombre' + numberPwdController);
    // console.log('spé' + specialCharPwdController);

    return(
        <LoggingFormsContext.Provider 
        value= {{
            formState,
            toggleForms,
            passwordCheck,
            lengthPwdController,
            upperCasePwdController,
            lowerCasePwdController,
            numberPwdController,
            specialCharPwdController
        }}>
            {children}
        </LoggingFormsContext.Provider>
    )

}