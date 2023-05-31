import React from "react";
import SideLeft from "../SideLeft/SideLeft";
import SideRigth from "../SideRigth/SideRigth";
import "./Home.css";

const Home = () => {
  return (
    <div className="space-work">
      <SideLeft />
      <SideRigth />
    </div>
  );
};

export default Home;
