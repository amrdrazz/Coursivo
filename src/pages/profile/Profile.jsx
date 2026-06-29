import { useContext } from "react"
import ProfileInfo from "./ProfilePages/dashboard/ProfileInfo"
import ProfileSidebar from "./ProfileSidebar"
import ProfileStatus from "./ProfilePages/dashboard/ProfileStatus"

import './profile.css'
import { UserContext } from "../../context/UserContext"
import { Link, Outlet } from "react-router-dom"


function Profile() {

  const { loading, loggedIn, setLoggedIn } = useContext(UserContext);
  return (

    <>
      {loading ? ('') : (
        loggedIn ? (
          <div className="profile">
            <ProfileSidebar />
            <div className="profile_content">
              <Outlet />
            </div>
          </div>
        ) : (
          <Link to='/login'><h1 className="login_redirect">log in frist</h1></Link>
        )
      )}
    </>
  )
}

export default Profile;
