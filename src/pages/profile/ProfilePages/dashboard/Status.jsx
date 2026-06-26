import { FaGraduationCap } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { PiCertificateBold } from "react-icons/pi";

function Status() {
  return (
    <div className="status">
        <div className="status_card">
            <span><FaGraduationCap /></span>
            <span>6</span>
            <span>Enrolled courses</span>
        </div>
        <div className="status_card">
            <span><IoCheckmarkDoneSharp /></span>
            <span>4</span>
            <span>Completed</span>
        </div>
        <div className="status_card">
            <span><PiCertificateBold /></span>
            <span>3</span>
            <span>Certificate</span>
        </div>
    </div>
  )
}

export default Status
