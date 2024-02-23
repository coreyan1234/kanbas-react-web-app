import { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
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
            <ul className="list-group wd-modules">
                {modulesList.map((module) => (
                <li
                    className="list-group-item"
                    onClick={() => setSelectedModule(module)}>
                    <div>
                    <FaEllipsisV className="me-2" />
                    <FaCaretRight />
                    {module.name}
                    <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaCaretDown />
                        <FaPlusCircle className="ms-2" />
                        <FaEllipsisV className="ms-2" />
                    </span>
                    </div>
                    {selectedModule._id === module._id && (
                    <ul className="list-group">
                        {module.lessons?.map((lesson) => (
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