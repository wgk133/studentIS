import { Link, NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark  justify-content-center">
            <Link
                className="navbar-brand btn btn-link"
                style={{ textDecoration: "none" }}
                to={"/"}
            >
              Student Management System
            </Link>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                    className="nav-link"
                    activeClassName="active"
                    to="/students"
                    end
                >
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
