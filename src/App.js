import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import HomePage from "./component/screens/HomePage";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";

const App = () => {
  return (
    <>
  
        <ScrollToTop />
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        
        </Routes>
      
    
    </>
  );
};

export default App;