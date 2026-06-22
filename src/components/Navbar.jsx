import { FiLogIn } from "react-icons/fi";
import { FaUserPlus } from "react-icons/fa";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll Down
        setShowNav(false);
      } else {
        // Scroll Up
        setShowNav(true);
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

          <div className="logo">
            <Link to='/'>
              <h1>Coursivo</h1>
            </Link>
          </div>

          <SearchBox />

          <div className="nav_icons">
            <Link to='/login'>
              <span><FiLogIn/></span>
            </Link>
            <Link to='signIn'>
              <span><FaUserPlus/></span>
            </Link>
          </div>

        </nav>
      </header>
    </>
  )
}

export default Navbar

