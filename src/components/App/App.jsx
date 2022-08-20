import React from "react";
import {Route, Routes} from "react-router-dom";
import LoginPage from "../../pages/LoginPage";
import Home from "../../pages/LoginPage";

function App() {
  return <>
  <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/" element={<LoginPage/>}/>
  </Routes>
  </>;
}

export default App;
