import ProfileInfo from "./ProfileInfo"
import ProfileSidebar from "./ProfileSidebar"
import ProfileStatus from "./ProfileStatus"

import './profile.css'


function Profile({ setLoggedIn }) {
  return (
    <div className="profile">
      <ProfileSidebar setLoggedIn={setLoggedIn} />
      <ProfileInfo />
      <ProfileStatus />
    </div>
  )
}

export default Profile
