import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import SearchBox from "./SearchBox";
import { SidebarContext } from './../context/SidebarContext';


function Navbar({ loggedIn }) {
  const [showNav, setShowNav] = useState(true);

  const {showSidebar, setShowSidebar} = useContext(SidebarContext);

  const location = useLocation();
  const [curruntPath, setCurruntPath] = useState('');

  useEffect(() => {
    setCurruntPath(location.pathname);
  },[location]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowNav(false);
        setShowSidebar(false);
      } else {
        // Scroll Up
        setShowNav(true);
        setShowSidebar(false);
      }

      lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  },[])

  return (
    <>
      <header className={showNav ? ('') : ('hide')}>
        <nav className="navbar">

          {
            (curruntPath.includes('/profile')) ? (
              <div onClick={() => {setShowSidebar(!(showSidebar))}} className="sidebar_toggeler">
                <IoIosMenu />
              </div>
            ) : ('')
          }

          <div className="logo">
            <Link to='/'>
              <h1>Coursivo</h1>
            </Link>
          </div>

          <SearchBox />

          <div className="nav_icons">
            {loggedIn ? (
                <Link to='/profile'>
                  <span className="profile_icon"><CgProfile /></span>
                </Link>
            ) : (
              <>
                <Link to='/login'>
                  <span><FiLogIn /></span>
                </Link>
                <Link to='/signup'>
                  <span><FaUserPlus /></span>
                </Link>
              </>
            )}
          </div>
          
        </nav>
      </header>
    </>
  )
}

export default Navbar

