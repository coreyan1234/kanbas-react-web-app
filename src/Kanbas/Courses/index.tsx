import { courses } from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1><HiMiniBars3 /> Course {course?.name}</h1>
    </div>
  );
}
export default Courses;