import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="add-btn">
        Add
      </button>
      <button onClick={updateCourse} className="update-btn">
        Update
      </button>
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                    <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} alt="img"/>
                </Link>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                      {course.name} 
                      <button onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }} className="edit-btn">
                        Edit
                      </button>
                      <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="delete-btn">
                        Delete
                      </button>
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;