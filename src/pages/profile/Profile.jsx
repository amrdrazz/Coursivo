import { useContext } from "react"
import ProfileInfo from "./ProfileInfo"
import ProfileSidebar from "./ProfileSidebar"
import ProfileStatus from "./ProfileStatus"

import './profile.css'
import { UserContext } from "../../context/UserContext"
import { Link } from "react-router-dom"


function Profile() {

  const { loading, loggedIn, setLoggedIn } = useContext(UserContext);
  return (

    <>
      {loading ? ('') : (
        loggedIn ? (
          <div className="profile">
            <ProfileSidebar />
            <ProfileInfo />
            <ProfileStatus />
          </div>
        ) : (
          <Link to='/login'><h1 className="login_redirect">log in frist</h1></Link>
        )
      )}
    </>
  )
}

export default Profile;
