import { FaBars, FaBell, FaBullhorn, FaChartBar, FaChevronDown, FaCrosshairs, FaFileImport, FaGlasses } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";
import ChevronNav from "../Navigation/chevron_nav";
import { useState } from "react";
import HamburgerNav from "../Navigation/hamburger_nav";

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

    const [chevronCollapsed, setChevronCollapsed] = useState(true);
    const [hamburgerCollapsed, setHamburgerCollapsed] = useState(true);
    const toggleChevron = () => {
        setChevronCollapsed(!chevronCollapsed);
    };
    const toggleHamburger = () => {
        setHamburgerCollapsed(!hamburgerCollapsed);
    }
    return (
        <div>
            <div className="d-block d-sm-block d-md-none">
                <div className="d-flex justify-content-between bg-black" style={{alignItems: "center"}}>
                    <button onClick={toggleHamburger} className="btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHamburger" aria-expanded="false" aria-controls="collapseHamburger">
                        <FaBars className="text-white"/>
                    </button>
                    <div className="d-flex text-center text-white">
                        CS4550.12631.202410
                        <br />
                        Modules
                    </div>
                    <button onClick={toggleChevron} className="btn" type="button" aria-expanded={!chevronCollapsed} aria-controls="collapseChevron">
                        <FaGlasses className="text-white"/>
                        <FaChevronDown className="text-white"/>
                    </button>
                </div>
            </div>
            {/* Hamburger + Chevron */}
            <div>
                <div className={`collapse ${hamburgerCollapsed ? '' : 'show'}`} id="collapseHamburger">
                    <div className="card card-body">
                        <HamburgerNav />
                    </div>
                </div>
                <div className={`collapse ${chevronCollapsed ? '' : 'show '}`} id="collapseChevron">
                    <div className="card card-body">
                        <ChevronNav />
                    </div>
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