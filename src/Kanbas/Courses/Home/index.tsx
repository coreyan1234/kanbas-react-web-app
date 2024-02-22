import { FaBars, FaBell, FaBullhorn, FaChartArea, FaChartBar, FaChevronDown, FaCrosshairs, FaFileImport, FaGlasses } from "react-icons/fa";
import ModuleList from "../Modules/List";
import "./index.css";
// import ChevronNav from "../Navigation/chevron_nav";
import { Link, Navigate, Route, Routes } from "react-router-dom";
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
                {/* Hamburger + Chevron */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
                <div className="d-flex justify-content-between bg-black" style={{alignItems: "center"}}>
                    <p>
                        <button onClick={toggleHamburger} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHamburger" aria-expanded="false" aria-controls="collapseHamburger">
                            <FaBars className="text-white"/>
                        </button>
                    </p>
                    {/* <a href="/Kanbas/Navigation/index_hamburger.html"><FaBars className="text-white"/></a> */}
                    <div className="d-flex text-center text-white">
                        CS4550.12631.202410
                        <br />
                        Modules
                    </div>
                    <p className="d-inline-flex gap-1">
                        <button onClick={toggleChevron} className="btn btn-primary" type="button" aria-expanded={!chevronCollapsed} aria-controls="collapseChevron">
                            <FaGlasses />
                            <FaChevronDown />
                        </button>
                    </p>
                </div>
            </div>
            <div style={{minHeight: "120px"}}>
                <div className={`collapse collapse-horizontal ${hamburgerCollapsed ? '' : 'show'}`} id="collapseHamburger">
                    <div className="card card-body" style={{width: "300px"}}>
                        <HamburgerNav />
                    </div>
                </div>
            </div>
            <div className={`collapse ${chevronCollapsed ? '' : 'show '}`} id="collapseChevron">
                <div className="card card-body">
                    <ChevronNav />
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