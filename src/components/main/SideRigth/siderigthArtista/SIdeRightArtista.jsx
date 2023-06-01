import React from "react";
import "./SideRigthArtista.css";
import { useParams } from "react-router-dom";
import { artistas } from "../../../../data/Datos";

const SideRightArtista = () => {
  let params = useParams();
  let infoArtist = artistas.filter((art) => art.id === parseInt(params.id));
  let populares = infoArtist[0].canciones.sort(
    (a, b) => b.reproducciones - a.reproducciones
  );
  console.log(populares);
  console.log(infoArtist);
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
        <div
          style={{
            backgroundImage: `url(${infoArtist[0].fondo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="artista-info-body"
        >
          <div className="artista-section-portrait">
            <div className="info-title">
              <h1>{infoArtist[0].name}</h1>
            </div>
          </div>
        </div>
        <div className="artista-songs">
          <div className="artista-songs-populares">
            <h1>Populares</h1>
            <table className="table-list">
              {populares.map((pop, index) => (
                <tr className="song-row">
                  <td style={{ width: "30px", padding: "10px 0px" }}>
                    {index + 1}
                  </td>
                  <td style={{ width: "700px" }}>{pop.title}</td>
                  <td style={{ width: "300px" }}>{pop.reproducciones}</td>
                  <td style={{ width: "200px" }}>{pop.duracion}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideRightArtista;
