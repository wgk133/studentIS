import { EditIcon, Trash2 } from "lucide-react";
import useListStudentComponentHook from "../hooks/useListStudentComponentHook";
import ButtonLink from "./ButtonLink";

const ListStudentComponent = () => {
  const { students, getDepartmentName, updateStudent, deleteStudentById } =
    useListStudentComponentHook();

  return (
    <div className="container">
      <h2 className="text-center my-3">List of Students</h2>
      <ButtonLink text="Add Student" toAction="/add-student" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"> Date of Birth</th>
            <th scope="col"> GPA</th>
            <th scope="col">Department</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.dob.split("T")[0]}</td>
                <td>{item.gpa}</td>
                <td>{getDepartmentName(item.departmentId)}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteStudentById(item.id)}
                    >
                      <Trash2 />
                    </button>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => updateStudent(item.id)}
                    >
                      <EditIcon />
                    </button>
                  </div>
                </td>
                {/* <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteStudentById(item.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => updateStudent(item.id)}
                  >
                    Update
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
