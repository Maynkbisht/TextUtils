import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  let headingcolor = {
    color: props.mode === "dark" ? "#ffffff" : "#000000",
    fontWeight: "700",
    fontSize: "23px",
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link
          className="text-center italiana navbar-brand"
          to="/"
          style={headingcolor}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-center italiana" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-center italiana" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>

          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input fs-switch-lg"
              type="checkbox"
              checked={props.mode === "dark"}
              onChange={props.togglemode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label ms-2"
              htmlFor="flexSwitchCheckDefault"
            ></label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

/* here we pass default values into it from props */
Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};
