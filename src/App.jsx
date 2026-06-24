// import React from 'react'

import { Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar"
import Home from './pages/home/Home';
import CourseInfo from "./pages/course-info/CourseInfo";
import Footer from "./components/Footer";
import Profile from "./pages/profile/Profile";
import Signup from './pages/Signup/Signup';
import Login from "./pages/login/Login";

function App() {

  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const getLoggedIn = async () => {
      try{
        const res = await fetch('https://coursivo-back-end.vercel.app/auth-me', { credentials: 'include' });
        if (res.ok){
          setLoggedIn(true);
        }else{
          setLoggedIn(false);
        }
      }catch(err){
        console.log(err)
        setLoggedIn(false);
      }
    };
    getLoggedIn();
  },[]);

  let language;

  if (!(localStorage.getItem('language'))){
    language = 'en';
    localStorage.setItem('language', 'en')
  }else{
    language = localStorage.getItem('language')
  }


  const [lang, setLang] = useState(language)


  return (
    <>
      <Navbar lang={lang} setLang={setLang} loggedIn={loggedIn} />
      <Routes>
        <Route path="*" element={<h1>404 Not founded</h1>} />
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/course-info" element={<CourseInfo />} />
        <Route path="/profile" element={<Profile setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
