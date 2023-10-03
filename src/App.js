import React from "react";
import { Route, Routes } from "react-router-dom";
import { store } from "./component/features/store/store";
import { Provider } from "react-redux";
import Home from "./component/screens/Home-page/Home";
import Signup from "./component/screens/signup/Signup";
import Login from "./component/screens/login/Login";
import Header from "./component/GenericComponents/Buttons/Header/header";
import CreateBlog from "./component/screens/createblog/createBlog";
import Footer from "./component/GenericComponents/Footer";
import Blog from "./component/screens/blogs/blog";
import ScrollToTop from "./component/GenericComponents/scrollToTop";
const App = () => {
  return (
    <>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/blogs/:id" element={<Blog />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </Provider>
    </>
  );
};

export default App;
