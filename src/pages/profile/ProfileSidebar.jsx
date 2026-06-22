

import { FiBookOpen } from "react-icons/fi";
import { IoHomeOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
function ProfileSidebar() {
  return (
    <div className="sidebar">
      <ul className="sidebar_links">
        <li className="active">
           <p><span><IoHomeOutline /></span> <span>Dashboard</span></p> 
        </li>
        <li>
           <p><span><FiBookOpen /></span> <span>My courses</span></p> 
        </li>
        <li>
           <p><span><TbCertificate /></span> <span>Certificates</span></p> 
        </li>
        <li>
           <p><span><FaRegHeart /></span> <span>Wishlist</span></p> 
        </li>
        <li>
           <p><span><IoSettingsOutline /></span> <span>Settings</span></p> 
        </li>
        <li>
           <p><span><IoLogOutOutline /></span> <span>Log out</span></p> 
        </li>
      </ul>
    </div>
  )
}

export default ProfileSidebar
