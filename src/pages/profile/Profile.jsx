import ProfileInfo from "./ProfileInfo"
import ProfileSidebar from "./ProfileSidebar"
import ProfileStatus from "./ProfileStatus"

import './profile.css'


function Profile() {
  return (
    <div className="profile">
      <ProfileSidebar />
      <ProfileInfo />
      <ProfileStatus />
    </div>
  )
}

export default Profile
