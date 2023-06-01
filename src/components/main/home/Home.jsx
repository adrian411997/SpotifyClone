import React from "react";
import SideLeft from "../SideLeft/SideLeft";
import SideRigth from "../SideRigth/SideRigth";
import "./Home.css";
import SideRightArtista from "../SideRigth/siderigthArtista/SIdeRightArtista";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <div className="space-work">
        <SideLeft />
        <Routes>
          <Route path="/" element={<SideRigth />}></Route>
          <Route path="/artista">
            <Route path=":id" element={<SideRightArtista />}></Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Home;
