import React from "react";
import "./loader.css";

function Loader() {
  return (
    <div className="loader_main">
      <div className="content">
        <div className="title">
          <span className="title_cover"></span>
          <h1>
            Anna Lartey<span></span>
          </h1>
        </div>

        <div className="role">
          <div className="role_cover"></div>
          <p>Frontend Software Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
