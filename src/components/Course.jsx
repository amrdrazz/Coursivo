import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";

function Course() {
  return (
    <Link to='/course-info'>
        <div className="course_card">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm9wNFRBoQXgVwVbMPAaGk95Q9lqXvZzvfw&s" alt="" />
            </div>
            <div className="content">

                <p className="title">Complete React Course</p>
                <p className="teacher">Amr Mohamed</p>
                <div className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p className="price"></p>
            </div>
        </div>
    </Link>
  )
}

export default Course
