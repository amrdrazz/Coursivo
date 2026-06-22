// import React from 'react'

import { Route, Routes } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from './pages/home/Home';
import CourseInfo from "./pages/course-info/CourseInfo";

import { useState } from "react";
import Footer from "./components/Footer";
import Profile from "./pages/profile/Profile";

function App() {

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
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/course-info" element={<CourseInfo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
