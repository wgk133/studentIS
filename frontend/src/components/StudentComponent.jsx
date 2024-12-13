import useStudentComponentHook from "../hooks/useStudentComponentHook";
import ButtonLink from "./ButtonLink";

const StudentComponent = () => {
  const {
    name,
    setName,
    dob,
    setDob,
    gpa,
    setGpa,
    email,
    setEmail,
    departmentId,
    setDepartmentId,
    departments,
    saveOrUpdateStudent,
    title,
  } = useStudentComponentHook();

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="name">
                  Name:{" "}
                </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="email">
                  Email:{" "}
                </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* date of birth */}
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="dob">
                  Date of Birth:{" "}
                </label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Date of Birth"
                  name="dob"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              {/* gpa */}
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="gpa">
                  GPA:{" "}
                </label>
                <input
                  className="form-control"
                  type="number"
                  placeholder="GPA"
                  name="gpa"
                  id="gpa"
                  value={gpa}
                  onChange={(e) => setGpa(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label" htmlFor="department">
                  Select Department:{" "}
                </label>
                <select
                  className="form-select"
                  id="department"
                  value={departmentId}
                  onChange={(e) => setDepartmentId(e.target.value)}
                >
                  <option value="Select Department">Select Department</option>
                  {departments.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.departmentName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateStudent}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentComponent;
