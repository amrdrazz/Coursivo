
import Course from '../../../../components/Course'
import EnrolledCourse from './EnrolledCourse'

import './myCourses.css'

function MyCourses() {
  const course = {
    title: 'React Complete Course',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm9wNFRBoQXgVwVbMPAaGk95Q9lqXvZzvfw&s',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6YHBXrjdP_vnMX15ncXntXwPlWWEEXikKn0m_aVN8A&s=10',
    about: 'Learn React from scratch and build modern web applications with hands-on projects. This course covers components, state, props, hooks, routing, API integration, and advanced React concepts to help you become a confident React developer.',
    instructor: 'Amr Mohamed',
    totalLessons: 35,
    completedLessons: 15
  }
  
  return (
    <>
      <div className='my_courses'>
        <h1>Your Enrolled Courses</h1>
        {[...Array(5)].map((_, index) => (
          <EnrolledCourse key={index} enrolled={true} course={course} />
        ))}
      </div>
    </>
  )
}

export default MyCourses
