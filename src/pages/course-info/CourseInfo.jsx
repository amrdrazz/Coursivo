
import { FaStar, FaUserGraduate } from "react-icons/fa"
import { LuTvMinimalPlay } from "react-icons/lu";
import { MdAccessTimeFilled } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { PiCertificateFill } from "react-icons/pi";

import './course-info.css'

function CourseInfo() {

    const course = {
        title: 'React Complete Course',
        about: 'Learn React from scratch and build modern web applications with hands-on projects. This course covers components, state, props, hooks, routing, API integration, and advanced React concepts to help you become a confident React developer.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm9wNFRBoQXgVwVbMPAaGk95Q9lqXvZzvfw&s',
        teacher: {
          name: 'Amr Mohamed',
          about: 'Frontend Developer & Instructor'
        },
        teacherID: 12,
        enrolledUsers: [1, 2, 3, 4, 5],
        rating: {
          rate: 4.8,
          reviewsNum: 120
        },
        lessonsNum: 35,
        totalTime: '6.5 Hours',
        level: {
          level: 'All levels',
          tip: 'Beginner & Advanced'
        }
    }

  return (
    <>
      <div className="course_info">
        <div className="course_img">
          <div className="img">
              <img src={course.image} alt={course.title} />
          </div>
          <h1>{course.title}</h1>
        </div>
        <div className="course_details">

          <h3>{course.title}</h3>

          <div className="instructor">
            <p className="teacher_name">By: <span>{course.teacher.name}</span></p>
            <p className="teacher_about">{course.teacher.about}</p>
          </div>

          <p className="about_course">{course.about}</p>

          <div className="rating">

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p>{course.rating.rate} <span>({course.rating.reviewsNum} Reviews)</span></p>

          </div>
          <p className="enrolled_users"><FaUserGraduate /> <span>{course.enrolledUsers.length}</span> Enrolled Users</p>
          <button>Enroll</button>
        </div>
      </div>
      <div className="course_prev">
        <div className="prev_cards">
          <div className="lessons prev_card">
            <LuTvMinimalPlay />
            <div className="text">
              <p>{course.lessonsNum -1}+ Lessons</p>
              <span>Video Content</span>
            </div>
          </div>

          <div className="total_time prev_card">
            <MdAccessTimeFilled />
            <div className="text">
              <p>{course.totalTime}</p>
              <span>Total Time</span>
            </div>
          </div>

          <div className="level prev_card">
            <SiLevelsdotfyi />
            <div className="text">
              <p>{course.level.level}</p>
              <span>{course.level.tip}</span>
            </div>
          </div>

          <div className="certificate prev_card">
            <PiCertificateFill />
            <div className="text">
              <p>Certificate</p>
              <span>Of Completion</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CourseInfo
