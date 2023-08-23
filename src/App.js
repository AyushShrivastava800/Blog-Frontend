import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./component/features/store/Store";
import MainAppBar from "./component/layout/MainAppBar";
import HomePage from "./component/screens/login-signup/signupPage";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import Signup from "./component/screens/login-signup/signupPage";
import LogIn from "./component/screens/login-signup/loginPage";
import Blog from "./component/screens/Blog/LayOut";
import Protected from "./component/protectedRoutes/Protected";
import PageNotFound from "./component/screens/PageNotFound/PageNotFound";
const App = () => {

  return (
    <>
      <Provider store={store}>
        <ScrollToTop />

        <MainAppBar />
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/blog" element={<Protected Component={Blog}/>}/>     
          <Route path="*" element={<Protected Component={PageNotFound}/>}/>
        </Routes>
      </Provider>
    </>
  );
};

export default App;
