import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css"

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  let courseNavBreadcrumb = useLocation().pathname.split("/").pop()
  if (courseNavBreadcrumb) {
    courseNavBreadcrumb = decodeURIComponent(courseNavBreadcrumb)
  }
  
  return (
    <div>
      <h1>
        <ul className="breadcrumb">
          <li className="breadcrumb-item" style={{ color: "red" }}><HiMiniBars3 /> Course {course?.name}</li>
          <li className="breadcrumb-item">{courseNavBreadcrumb}</li>
        </ul>
        <hr />
      </h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={<h1>Modules</h1>} />
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
  );
}
export default Courses;