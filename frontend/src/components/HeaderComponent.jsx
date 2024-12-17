import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center">
          <button
            className="navbar-brand btn btn-link"
            style={{ textDecoration: "none" }}
          >
            Student Management System
          </button>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to="/" end>
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/departments"
              >
                Departments
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
