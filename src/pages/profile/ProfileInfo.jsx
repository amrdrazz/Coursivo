import UserCourses from "./UserCourses"
import UserInfo from "./UserInfo"


function ProfileInfo() {
  return (
    <div className="profile_info">
      <UserInfo />
      <UserCourses />
    </div>
  )
}

export default ProfileInfo
