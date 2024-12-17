import { EditIcon, Trash2 } from "lucide-react";
import useListDepartmentComponentHook from "../hooks/useListDepartmentComponentHook";
import ButtonLink from "./ButtonLink";

const ListDepartmentComponent = () => {
  const { departments, updateDepartment, removeDepartment } =
    useListDepartmentComponentHook();

  return (
    <div className="container">
      <h2 className="text-center py-3">List of Departments</h2>
      <ButtonLink text="Add Department" toAction="/add-department" />
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Department Name</th>
            <th scope="col">Department Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.departmentName}</td>
                <td>{item.departmentDescription}</td>
                <td>
                  <div className="btn-group">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => removeDepartment(item.id)}
                    >
                      <Trash2 />
                    </button>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => updateDepartment(item.id)}
                    >
                      <EditIcon />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
