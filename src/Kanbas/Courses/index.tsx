import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css"
import { FaGlasses } from "react-icons/fa";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  let courseNavBreadcrumb = useLocation().pathname.split("/").pop()
  if (courseNavBreadcrumb) {
    courseNavBreadcrumb = decodeURIComponent(courseNavBreadcrumb)
  }
  
  return (
    <div>
      <div className="wd-flex-row-container justify-content-between">
        <h1 style={{fontSize: "30px"}}>
          <ul className="breadcrumb">
            <li className="breadcrumb-item" style={{ color: "red" }}><HiMiniBars3 /> Course {course?.name}</li>
            <li className="breadcrumb-item">{courseNavBreadcrumb}</li>
            {/* <div className="wd-flex-row-container top-buttons">
              <button style={{fontSize: "20px"}}><FaGlasses className="ms-2"/> Student View</button>
            </div> */}
          </ul>
        </h1>
        <div className="top-buttons">
          <button style={{fontSize: "20px"}}><FaGlasses className="ms-2"/> Student View</button>
        </div>
      </div>
      <hr />
      <div className="wd-flex-row-container">
        <div className="d-flex d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <div
            // className="overflow-y-scroll position-fixed bottom-0 end-0"
            style={{ left: "320px", top: "100px" }} >
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<h1>Home</h1>} />
              <Route path="Modules" element={<Modules/>} />
              <Route path="Piazza" element={<h1>Piazza</h1>} />
              <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
              <Route path="Assignments" element={<h1>Assignments</h1>} />
              <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
              <Route path="Quizzes" element={<h1>Quizzes</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;