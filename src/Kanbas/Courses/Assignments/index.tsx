import React from "react";
import { FaCaretDown, FaCaretRight, FaCheckCircle, FaClipboardCheck, FaClipboardList, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="wd-flex-row-container justify-content-between">
        <input type="text" placeholder="Search for Assignment"/>
        <div>
            <button className="group-button">+ Group</button>
            <button className="assignment-button">+ Assignment</button>
            <button className="group-button"><FaEllipsisV className="ms-2" /></button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="wd-flex-row-container justify-content-between">
            <div>
                <FaEllipsisV className="me-2" />
                <FaCaretDown className="me-2"/>
                ASSIGNMENTS
            </div>
            <span className="wd-flex-row-container align-items-center">
                <p className="text-border">40% of Total</p>
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
                <li className="list-group-item">
                    <div className="wd-flex-row-container align-items-center">
                        <FaEllipsisV className="me-2" />
                        <FaClipboardList className="me-2" style={{color: "green"}} />
                        <div className="wd-flex-row-container">
                            <div>
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                                <div className="wd-flex-row-container">
                                    <p style={{color: "red"}}>Multiple Modules</p>
                                    <p>&nbsp;| Due Sep 18 at 11:59pm | 100 pts</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1" /> {/* This element pushes the span (below) to the right */}
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );}
export default Assignments;