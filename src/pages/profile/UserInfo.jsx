import { FaRegEdit } from "react-icons/fa";

function UserInfo() {
  return (
    <div className="personal">
      <div className="profile_img">
        <div className="red"></div>
      </div>
      <div className="profile_details">
        <h1 className="name">Amr Mohamed Abbas</h1>
        <p className="email">amr.draz.2009@gmail.com</p>
        <p className="country">Egypt</p>
        <p className="about">Front-end web developer</p>
      </div>
      <div className="edit_profile">
        <button><FaRegEdit /> Edit Profile</button>
      </div>
    </div>
  )
}

export default UserInfo
