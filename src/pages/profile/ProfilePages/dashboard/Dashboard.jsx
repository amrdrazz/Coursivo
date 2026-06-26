

import Certificates from './Certificates';
import ProfileInfo from './ProfileInfo'
import Status from './Status';
import UserCourses from './UserCourses';

function Dashboard() {
  return (
    <>
      <ProfileInfo />
      <Status />
      <div className="courses-certificates">
        <UserCourses />
        <Certificates />
      </div>
    </>
  )
}

export default Dashboard
