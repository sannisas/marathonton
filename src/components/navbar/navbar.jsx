import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#273440" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="main-page.html">
          <img src="Logo Television.png" alt="" style={{ width: "78px", height: "61.02px", left: "33px", top: "21px" }} />
        </a>
        <button type="button" className="btn btn-link" style={{ textDecoration: "none", color: "#44586B", fontSize: "32px" }} disabled>Welcome!</button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* ... Your existing Navbar JSX */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;