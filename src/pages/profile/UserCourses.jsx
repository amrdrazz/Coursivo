import { WiDayThunderstorm } from "react-icons/wi";
import ProfileCourse from "./ProfileCourse";


function UserCourses() {

    const course = {
        name: 'React Complete Course',
        img: './src/imgs/react-thumbnail.png',
        thumbnail: './src/imgs/react-thumbnail.png',
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
