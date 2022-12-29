import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";
const NavBar = () => {
  const { user } = useAuth();
  return (
    <>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <span className="text-bg-dark">
              Real <i className="bi bi-hurricane"></i> App{" "}
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink aria-current="page" className="nav-link" to="about">
                  About
                </NavLink>
              </li>
              {user?.biz && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="myCards">
                    My Cards
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="ms-auto mb-2 mb-sm-0 navbar-nav">
              {!user && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="signIn">
                      Sign In
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="signUp">
                      Sign Up
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="signUpBiz">
                      Sign Up Business
                    </NavLink>
                  </li>
                </>
              )}
              {user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="signOut">
                    Sign Out
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
