import React from "react";
import "./style.css";

function Navbar({handleInputChange}) {
  return (
    <>
      <nav className="navbar fixed-top navbar-dark bg-dark justify-content-between">
        <span className="navbar-brand">Employee Directory</span>
        <form className="form-inline">
          <input
            onChange={handleInputChange}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
      </nav>
    </>
  );
}

export default Navbar;
