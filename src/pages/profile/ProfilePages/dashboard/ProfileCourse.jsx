// import React from 'react'

function ProfileCourse({ course }) {

    const progress = (course.completedLessons / course.totalLessons) * 100;

  return (
    <div className="course">
        <div className="course_img">
            <img src={course.thumbnail} alt="" />
        </div>
        <div className="left">
            <h1 className="course_name">{course.name}</h1>
            <div className="progress_bar">
                <div className="bar">
                    <div className="progress_fill" style={{width: `${progress}%`}}></div>
                </div>
                <span className="persentage">{`${Math.round(progress)}%`}</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileCourse;
