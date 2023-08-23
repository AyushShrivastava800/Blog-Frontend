import React from 'react'
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Protected(props) {
  const navigate=useNavigate();
  const {Component}=props;
  useEffect(() => {
    const loginToken=Cookies.get("jwt")
    if(!loginToken){
      navigate('/login')
    }
  }, []);
  return (
    <>
        <Component/>
    </>
  )
}

export default Protected;