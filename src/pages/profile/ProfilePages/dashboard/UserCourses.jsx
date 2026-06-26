import { WiDayThunderstorm } from "react-icons/wi";
import ProfileCourse from "./ProfileCourse";


function UserCourses() {

    const course = {
        name: 'React Complete Course',
        img: './src/imgs/react-thumbnail.png',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6YHBXrjdP_vnMX15ncXntXwPlWWEEXikKn0m_aVN8A&s=10',
        totalLessons: 35,
        completedLessons: 15
    }

  return (
    <div className="profile_courses">
      <h1>My courses</h1>
      <div className="courses">
        {[...Array(3)].map((_, index) => (
            <ProfileCourse key={index} course={course}/>
        ))}
      </div>
    </div>
  )
}

export default UserCourses
