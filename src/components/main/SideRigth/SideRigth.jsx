import React from "react";
import "./SideRight.css";
import { artistas } from "../../../data/Datos";

const SideRigth = () => {
  return (
    <div className="SideRigth-space">
      <div className="SideRigth-container">
        <div className="SideRigth-header">
          <div className="buttons-directions">
            <button className="direction left">
              <svg fill="#ffff" height="16" width="16" viewBox="0 0 16 16">
                <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
              </svg>
            </button>
            <button className="direction rigth">
              <svg fill="#ffff" height="16" width="16" viewBox="0 0 16 16">
                <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
              </svg>
            </button>
          </div>
          <div className="buttons-options">
            <button className="premium">
              <strong>Premium</strong>
            </button>
            <button className="install">Instalar Aplicacion</button>
            <button></button>
          </div>
        </div>
        <div className="SideRigth-body">
          <div className="artistas-container">
            <div className="artistas-title">
              <h1>Artistas</h1>
            </div>
            <div className="artistas-cards">
              {artistas.map((ar, index) => (
                <div className="artistas-card">
                  <div
                    style={{
                      backgroundImage: `url(${ar.photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="artista-image"
                  ></div>
                  <div className="artista-name">
                    <p>{ar.name}</p>
                  </div>
                  <div className="artista-define">
                    <h4>{ar.class}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideRigth;
