import { FaBars, FaBell, FaBullhorn, FaChartArea, FaChartBar, FaChevronDown, FaCrosshairs, FaFileImport, FaGlasses } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";
// import ChevronNav from "../Navigation/chevron_nav";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import ChevronNav from "../Navigation/chevron_nav";

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
            <div className="d-block d-sm-block d-md-none">
                {/* Hamburger + Chevron */}
                <div className="d-flex justify-content-between bg-black" style={{alignItems: "center"}}>
                    <a href="/Kanbas/Navigation/index_hamburger.html"><FaBars className="text-white"/></a>
                    <div className="d-flex text-center text-white">
                        CS4550.12631.202410
                        <br />
                        Modules
                    </div>
                    {/* <Link to={<ChevronNav/>} className="text-white" style={{float: "right"}}>
                        <FaGlasses />
                        <FaChevronDown />
                    </Link> */}
                    {/* <a href="/Kanbas/Courses/Navigation/index_chevron.html" className="text-white">
                        <FaGlasses />
                        <FaChevronDown />
                    </a> */}
                </div>
            </div>
            <div className="wd-flex-row-container">
                <ModuleList />
                <div className="wd-flex-row-container">
                    <div className="flex-grow-0 me-2 d-none d-lg-block" style={{paddingLeft: "25px"}}>
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