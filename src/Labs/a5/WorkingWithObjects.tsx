import React, { useState } from "react";
function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    
    const [module, setModule] = useState({
        id: "module id",
        name: "module name",
        description: "module description",
        course: "module course",
    });
  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`} className="btn btn-primary">
        Update Score
      </a>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>
      <a href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`} className="btn btn-primary">
        Update Completed Property
      </a>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: !assignment.completed })}/>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary">
        Get Title
      </a>
      <h4>On Your Own: module</h4>
      <a href="http://localhost:4000/a5/module" className="btn btn-primary">
        Get Module
      </a>
      <a href="http://localhost:4000/a5/module/name" className="btn btn-primary">
        Get Module Name
      </a>
      <a href={`http://localhost:4000/a5/module/name/${module.name}`} className="btn btn-primary">
        Update Name
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <a href={`http://localhost:4000/a5/module/description/${module.description}`} className="btn btn-primary">
        Update Description
      </a>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/>
    </div>
  );
}
export default WorkingWithObjects;