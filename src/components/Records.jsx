import { GrCertificate } from "react-icons/gr";
import { PiStudentBold, PiChalkboardTeacherBold } from "react-icons/pi";

function Records() {
  return (
    <div className="records">

      <div className="record students">
        <p>15k+ <span><PiStudentBold /></span></p>
        <span>Students</span>
      </div>

      <div className="record courses">
        <p>500+ <span><GrCertificate /></span></p>
        <span>Courses</span>
      </div>

      <div className="record instructors">
        <p>50+ <span><PiChalkboardTeacherBold /></span></p>
        <span>instuctors</span>
      </div>
    </div>
  )
}

export default Records
