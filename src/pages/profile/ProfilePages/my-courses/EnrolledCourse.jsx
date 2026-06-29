
import { Link } from 'react-router-dom'

function EnrolledCourse({ course }) {
  return (
    <div className='enrolled_course'>
        <div className="img">
          <img src={course.img} alt="" />
        </div>

        <div className="text">
          <div className="info">
            <h1 className='title'>{course.title}</h1>
            <Link><p className="about">{course.about}</p></Link>
            <p className='instructor'>{course.instructor}</p>
          </div>

          <div className="progress_bar">
            <div className="bar">
              <div className="progress_fill" style={{width: `${43}%`}}></div>
            </div>
            <span className="persentage">{`${Math.round(43)}%`}</span>
          </div>
        </div>

        <Link className="countinue_learning">
          <button>Continue Learning</button>
        </Link>
    </div>
  )
}

export default EnrolledCourse
