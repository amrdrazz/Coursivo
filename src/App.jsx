// import React from 'react'

import { Route, Routes } from "react-router-dom"
import { useContext, useEffect, useState } from "react";

import Navbar from "./components/Navbar"
import Home from './pages/home/Home';
import CourseInfo from "./pages/course-info/CourseInfo";
import Footer from "./components/Footer";
import Profile from "./pages/profile/Profile";
import Signup from './pages/Signup/Signup';
import Login from "./pages/login/Login";
import { UserContext } from "./context/UserContext";
import Dashboard from "./pages/profile/ProfilePages/dashboard/Dashboard";
import MyCourses from './pages/profile/ProfilePages/my-courses/MyCourses';
import Certificates from "./pages/profile/ProfilePages/certificatesPage/Certificates";
import Wishlist from "./pages/profile/ProfilePages/wishlist/Wishlist";
import Settings from "./pages/profile/ProfilePages/settingsPage/Settings";

function App() {

  const { user, loggedIn, setLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (user){
      setLoggedIn(true);
    }
  },[user]);

  let language;

  if (!(localStorage.getItem('language'))){
    language = 'en';
    localStorage.setItem('language', 'en')
  }else{
    language = localStorage.getItem('language')
  }


  const [lang, setLang] = useState(language);


  return (
    <>
      <Navbar lang={lang} setLang={setLang} loggedIn={loggedIn} />
      <Routes>
        <Route path="*" element={<h1>404 Not founded</h1>} />
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/course-info" element={<CourseInfo />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Dashboard />} />
          <Route path="/profile/my-courses" element={<MyCourses />} />
          <Route path="/profile/certificates" element={<Certificates />} />
          <Route path="/profile/wishlist" element={<Wishlist />} />
          <Route path="/profile/settings" element={<Settings />} />
        </Route>
        <Route path="/signup" element={<Signup setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
