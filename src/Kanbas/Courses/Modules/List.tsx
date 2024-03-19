import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../Store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
        <div className="flex-fill">
            <div className="d-flex justify-content-end top-buttons">
                <button>Collapse All</button>
                <button>View Progress</button>
                <button className="dropdown-toggle publish-all-btn" type="button">
                    <FaRegCheckCircle className="text-success" />
                    Publish All
                </button>
                <button className="bg-danger text-white">+ Module</button>
                <button><FaEllipsisV className="ms-2" /></button>
            </div>
            <hr ></hr>
            <li className="list-group-item wd-flex-row-container">
                <div className="d-flex flex-column">
                    <input value={module.name}
                        onChange={(e) => 
                            dispatch(setModule({ ...module, name: e.target.value }))
                        }/>
                    <textarea value={module.description}
                        onChange={(e) => 
                            dispatch(setModule({ ...module, description: e.target.value }))
                        }/>
                </div>
                <div>
                    <button onClick={() => dispatch(updateModule(module))} className="update-btn">
                        Update
                    </button>
                    <button onClick={() => { dispatch(addModule({ ...module, course: courseId })) }} className="add-btn">
                        Add
                    </button>
                </div>
            </li>
            <ul className="list-group wd-modules">
                {moduleList
                .filter((module) => module.course === courseId)
                .map((module) => (
                <li
                    className="list-group-item"
                    onClick={() => setSelectedModule(module)}>
                    <div>
                        <FaEllipsisV className="me-2" />
                        <FaCaretRight />
                        {module.name}
                        <button onClick={() => dispatch(deleteModule(module._id))} className="delete-btn">
                            Delete
                        </button>
                        <button onClick={() => dispatch(setModule(module))} className="edit-btn">
                            Edit
                        </button>
                        <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaCaretDown />
                            <FaPlusCircle className="ms-2" />
                            <FaEllipsisV className="ms-2" />
                        </span>
                        <p>{module.description}</p>
                    </div>
                    {selectedModule._id === module._id && (
                    <ul className="list-group">
                        {module.lessons?.map((lesson: any) => (
                        <li className="list-group-item">
                            <FaEllipsisV className="me-2" />
                            {lesson.name}
                            <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                            </span>
                        </li>
                        ))}
                    </ul>
                    )}
                </li>
                ))}
            </ul>
        </div>
    </>
  );
}
export default ModuleList;