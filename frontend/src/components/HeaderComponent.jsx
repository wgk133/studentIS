import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-brand btn btn-link"
            style={{ textDecoration: "none" }}
          >
            Student Management System
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/students">
                  Students
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/departments">
                  Departments
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
