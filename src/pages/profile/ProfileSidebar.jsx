

import { FiBookOpen } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from './../../context/SidebarContext';
function ProfileSidebar() {
   const location = useLocation();
   const [curruntPath, setCurruntPath] = useState('/profile');

   const {showSidebar} = useContext(SidebarContext);

   useEffect(() => {
      setCurruntPath(location.pathname);
   },[location]);
  return (
    <div className={`sidebar ${showSidebar && 'show'}`}>
      <ul className="sidebar_links">
        <li className={`${(curruntPath === '/profile') && 'active'}`}>
           <Link to='/profile'>
               <p><span><IoHomeOutline /></span> <span>Dashboard</span></p> 
           </Link>
        </li>
        <li className={`${(curruntPath === '/profile/my-courses') && 'active'}`}>
           <Link to='/profile/my-courses'>
               <p><span><FiBookOpen /></span> <span>My courses</span></p> 
           </Link>
        </li>
        <li className={`${(curruntPath === '/profile/certificates') && 'active'}`}>
           <Link to='/profile/certificates'>
               <p><span><TbCertificate /></span> <span>Certificates</span></p> 
           </Link>
        </li>
        <li className={`${(curruntPath === '/profile/wishlist') && 'active'}`}>
           <Link to='/profile/wishlist'>
               <p><span><FaRegHeart /></span> <span>Wishlist</span></p> 
           </Link>
        </li>
        <li onClick={() => {setLoggedIn(false)}}>
           <p><span><IoLogOutOutline /></span> <span>Log out</span></p> 
        </li>
      </ul>
    </div>
  )
}

export default ProfileSidebar
