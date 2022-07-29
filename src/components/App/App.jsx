import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import SignUpForm from "../SignUpForm/SignUpForm";

function App() {
  return <>
  <Routes>
    <Route path="/login" element={<Home/>}/>
  </Routes>
  </>;
}

export default App;
