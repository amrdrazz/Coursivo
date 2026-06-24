import { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { UserContext } from "../../context/UserContext";

function UserInfo() {

  const {user, setUser, loading} = useContext(UserContext);
  
  return (
    <div className="personal">
      <div className="profile_img">
        <div className="red"></div>
      </div>
      <div className="profile_details">
        <h1 className="name">{loading ? ('') : (user.name)}</h1>
        <p className="email">{loading ? ('') : (user.email)}</p>
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
