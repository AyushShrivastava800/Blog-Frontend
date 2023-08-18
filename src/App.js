import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonAppBar from "./component/layout/Header";
import HomePage from "./component/screens/signupPage";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
  import Signup from "./component/screens/signupPage";
  import LogIn from "./component/screens/loginPage";
const App = () => {
  return (
    <>
  
        <ScrollToTop />
        <ButtonAppBar/>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<Signup />} /> 
      <Route exact path="/login" element={<LogIn />} />
        </Routes>
      
    
    </>
  );
};

export default App;