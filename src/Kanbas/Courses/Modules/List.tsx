import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaRegCheckCircle, FaCaretDown, FaCaretRight } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const [moduleList, setModuleList] = useState<any[]>(modules);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  const [module, setModule] = useState({
    _id: "L101",
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString()};
    const newModuleList = [newModule, ...moduleList];
    setModuleList(newModuleList);
  };
  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };
  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };
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
            <li className="list-group-item">
                <div className="d-flex">
                    <input value={module.name}
                        onChange={(e) => setModule({
                            ...module, name: e.target.value })}
                    />
                    <button onClick={updateModule}>
                        Update
                    </button>
                    <button onClick={() => { addModule(module) }}>
                        Add
                    </button>
                </div>
                <div>
                    <textarea value={module.description}
                        onChange={(e) => setModule({
                            ...module, description: e.target.value })}
                    />
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
                        <button onClick={(event) => { setModule(module); }}>
                            Edit
                        </button>
                        <button onClick={() => deleteModule(module._id)}>
                            Delete
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