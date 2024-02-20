import { FaBell, FaBullhorn, FaChartArea, FaChartBar, FaCrosshairs, FaFileImport } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
    const buttons = [
        { 
            "description": " Import Existing Content",
            "icon": <FaFileImport />
        },
        { 
            "description": " Import From Commons",
            "icon": <FaFileImport /> 
        },
        { 
            "description": " Choose Home Page",
            "icon": <FaCrosshairs />
        },
        { 
            "description": " View Course Stream",
            "icon": <FaChartBar /> 
        },
        { 
            "description": " New Announcement",
            "icon": <FaBullhorn /> 
        },
        { 
            "description": " New Analytics",
            "icon": <FaChartBar /> 
        },
        { 
            "description": " View Course Notifications",
            "icon": <FaBell /> 
        }
    ]

  return (
    <div>
      <h2>Home</h2>
      <ModuleList />
      <h2>Course Status</h2>
      <div className="wd-flex-grow-1">
        <div className="wd-flex-row-container">
            <div className="flex-grow-0 me-2 d-none d-lg-block">
                <h5>Course Status</h5>
                <div className="wd-flex-row-container">
                    <button className="col unpublish-button"><i className="fa fa-ban"></i> Unpublish</button>
                    <button className="col published-button"><i className="fa fa-circle-check"></i> Published</button>
                </div>
                <br />
                <div className="stacked-buttons">
                    { buttons.map((button) => (
                        <div><button className="button">{button.icon} {button.description}</button></div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Home;