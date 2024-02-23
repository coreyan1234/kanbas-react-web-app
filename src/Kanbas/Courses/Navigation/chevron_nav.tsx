import { useParams } from "react-router";
import { courses } from "../../Database";
import {
  FaBookOpen,
  FaBriefcase,
  FaBullhorn,
  FaBullseye,
  FaClipboardCheck,
  FaCog,
  FaComment,
  FaFile,
  FaFolder,
  FaHome,
  FaList,
  FaPlug,
  FaRegCircle,
  FaRegEyeSlash,
  FaRocket,
  FaSpinner,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function ChevronNav() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return(
        <div className="wd-flex-row-container">
            <div>
                <ul className="wd-navigation">
                    <li><FaHome /><Link to={`/Kanbas/Courses/${course?._id}/`}> Home</Link></li>
                    <li><FaSpinner /><Link to={`/Kanbas/Courses/${course?._id}/Modules`}> Modules</Link></li>
                    <li><FaPlug /><Link to={`http://piazza.com`}> Piazza</Link></li>
                    <li><FaPlug /><Link to={"#"}> Zoom Meetings</Link></li>
                    <li><FaBriefcase /><Link to={`/Kanbas/Courses/${course?._id}/Assignments`}> Assignments</Link></li>
                    <li><FaRocket /><Link to={"#"}> Quizzes</Link></li>
                    <li><FaClipboardCheck /><Link to={`/Kanbas/Courses/${course?._id}/Grades`}> Grades</Link></li>
                    <li><FaUsers /><Link to={"#"}> People</Link></li>
                    <li><FaPlug /><Link to={"#"}> Panopto Video</Link></li>
                    <li><FaComment /><Link to={"#"}> Discussions </Link><FaRegEyeSlash/></li>
                    <li><FaBullhorn /><Link to={"#"}> Announcements </Link><FaRegEyeSlash/></li>
                    <li><FaFile /><Link to={"#"}> Pages </Link><FaRegEyeSlash/></li>
                    <li><FaFolder /><Link to={"#"}> Files </Link><FaRegEyeSlash/></li>
                    <li><FaList /><Link to={"#"}> Rubrics </Link><FaRegEyeSlash/></li>
                    <li><FaBullseye /><Link to={"#"}> Outcomes </Link><FaRegEyeSlash/></li>
                    <li><FaRegCircle /><Link to={"#"}> Collaborations </Link><FaRegEyeSlash/></li>
                    <li><FaBookOpen /><Link to={"#"}> Syllabus </Link><FaRegEyeSlash/></li>
                    <li><FaCog /><Link to={"#"}> Settings</Link></li>
                </ul>
            </div>
            <div className="exit-icon">
                <Link to={`/Kanbas/Courses/${course?._id}/Home`} className="text-white" style={{float: "right"}}>
                    <FaTimes/>
                </Link>
            </div>
        </div>
    )
}
export default ChevronNav;