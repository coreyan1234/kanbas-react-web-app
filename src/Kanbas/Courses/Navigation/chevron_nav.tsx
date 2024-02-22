import { useParams } from "react-router";
import { courses } from "../../Database";
import {
  FaBookOpen,
  FaBriefcase,
  FaBullhorn,
  FaBullseye,
  FaChevronDown,
  FaClipboardCheck,
  FaCog,
  FaComment,
  FaCross,
  FaFile,
  FaFolder,
  FaGlasses,
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
        <html>
            <head></head>
            <body>
                <div className="wd-flex-row-container">
                    <div>
                        <ul className="wd-navigation">
                        <li><FaHome /><a href="/Kanbas/Courses/Home/screen.html"> Home</a></li>
                            <li><FaSpinner /><a href="/Kanbas/Courses/Modules/index.html"> Modules</a></li>
                            <li><FaPlug /><a href="http://piazza.com"> Piazza</a></li>
                            <li><FaPlug /><a href="#"> Zoom Meetings</a></li>
                            <li><FaBriefcase /><a href="/Kanbas/Courses/Assignments/screen.html"> Assignments</a></li>
                            <li><FaRocket /><a href="#"> Quizzes</a></li>
                            <li><FaClipboardCheck /><a href="/Kanbas/Courses/Grades/screen.html"> Grades</a></li>
                            <li><FaUsers /><a href="#"> People</a></li>
                            <li><FaPlug /><a href="#"> Panopto Video</a></li>
                            <li><FaComment /><a href="#"> Discussions </a><FaRegEyeSlash/></li>
                            <li><FaBullhorn /><a href="#"> Announcements </a><FaRegEyeSlash/></li>
                            <li><FaFile /><a href="#"> Pages </a><FaRegEyeSlash/></li>
                            <li><FaFolder /><a href="#"> Files </a><FaRegEyeSlash/></li>
                            <li><FaList /><a href="#"> Rubrics </a><FaRegEyeSlash/></li>
                            <li><FaBullseye /><a href="#"> Outcomes </a><FaRegEyeSlash/></li>
                            <li><FaRegCircle /><a href="#"> Collaborations </a><FaRegEyeSlash/></li>
                            <li><FaBookOpen /><a href="#"> Syllabus </a><FaRegEyeSlash/></li>
                            <li><FaCog /><a href="#"> Settings</a></li>
                        </ul>
                    </div>
                    <div className="exit-icon">
                        <Link to={`/Kanbas/Courses/${course?._id}/Home`} className="text-white" style={{float: "right"}}>
                            <FaTimes/>
                        </Link>
                    </div>
                </div>
            </body>
        </html>
        
    )
}
export default ChevronNav;