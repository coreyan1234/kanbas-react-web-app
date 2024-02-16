import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaTv, FaArrowRight, FaRegQuestionCircle } from "react-icons/fa";

function KanbasNavigation() {
  const links = [
    { label: "N" },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 fs-2-gray" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",     icon: <FaInbox className="fs-2" />          },
    { label: "History",   icon: <FaRegClock className="fs-2" />       },
    { label: "Studio",    icon: <FaTv className="fs-2" />             },
    { label: "Commons",   icon: <FaArrowRight className="fs-2" />     },
    { label: "Help",      icon: <FaRegQuestionCircle className="fs-2" />       },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;