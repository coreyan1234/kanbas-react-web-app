import { FaArrowRight, FaBook, FaCalendar, FaEnvelopeOpen, FaQuestion, FaQuestionCircle, FaRegClock, FaTachometerAlt, FaTv, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { courses } from "../../Database";
import "./hamburger_nav.css";

function HamburgerNav() {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    return (
        <div className="wd-flex-row-container">
            <div>
                <ul className="hamburger-kanbas-navigation">
                    <li><Link to={"http://northeastern.edu"}>N</Link></li>
                    <li className="wd-account"><Link to={`Kanbas/Account`}><FaUser/> Account</Link></li>
                    <li><Link to={`/Kanbas/Dashboard`}><FaTachometerAlt /> Dashboard</Link></li>
                    <li><Link to={`/Kanbas/Courses`}><FaBook /> Courses</Link></li>
                    <li><Link to={"#"}><FaCalendar /> Calendar</Link></li>
                    <li><Link to={"#"}><FaEnvelopeOpen /> Inbox</Link></li>
                    <li><Link to={"#"}><FaRegClock /> History</Link></li>
                    <li><Link to={"#"}><FaTv /> Studio</Link></li>
                    <li><Link to={"#"}><FaArrowRight /> Commons</Link></li>
                    <li><Link to={"#"}><FaQuestionCircle/> Help</Link></li>
                </ul>
            </div>
            <div className="hamburger-kanbas-navigation">
                <a href="/Kanbas/Courses/Home/screen.html" style={{float: "right"}}><i className="fa-solid fa-xmark"></i></a>
            </div>
        </div>
    )
}
export default HamburgerNav;