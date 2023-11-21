import React from "react";
import Navbar from "./components/Navbar";

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item disabled" aria-current="page" style={{ paddingLeft: "10px", color: "#44586B", fontSize: "20px" }}>Home</li>
          <li className="breadcrumb-item active" aria-current="page" style={{ paddingLeft: "10px", color: "#44586B", fontSize: "20px" }}>About Us</li>
        </ol>
      </nav>

      <div className="about-us">
        <h2 style={{ fontWeight: "bold", color: "#44586B", paddingLeft: "10px" }}>About Us</h2>
        <p style={{ color: "#44586B", paddingLeft: "10px", justifyContent: "flex-end" }}>
          “We first started Marathon-ton to unify the streaming sensations among platforms because it would be irritating to change platform just to check on what's good to stream. During our journey, we have to work with other streaming platforms and production houses, to make this dream comes true. We also work with IMDb as the largest site for movie makers. We strive to be the platform which serves any titles you could mention and up-to-date information about it.”
        </p>
      </div>
    </div>
  );
};

export default AboutUs;