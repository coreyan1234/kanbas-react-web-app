import { FaArrowRight, FaBook, FaCalendar, FaEnvelopeOpen, FaQuestionCircle, FaRegClock, FaTachometerAlt, FaTv, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./hamburger_nav.css";

function HamburgerNav() {
    return (
        <div className="wd-flex-row-container">
            <ul className="hamburger-kanbas-navigation">
                <li><Link to={"http://northeastern.edu"}>N</Link></li>
                <li className="wd-account"><Link to={`/Kanbas/Account`}><FaUser/> Account</Link></li>
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
    )
}
export default HamburgerNav;