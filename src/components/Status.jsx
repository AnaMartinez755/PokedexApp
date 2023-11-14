/* eslint-disable react/jsx-key */
import React from "react";
import "../styles/status.css";
import { useParams } from "react-router-dom";

const Status = ({ pokemonList }) => {
  const { id } = useParams();
  console.log(pokemonList);
  return (
    <div className="stat-main-container">
      {pokemonList[id - 1].stats.map((stat) => (
        <div className="stat-container">
          <p className="stat1"><b>{stat.stat.name}</b></p>
          <div key={id} className="progress stat2" role="progressbar">
            <div
              className="progress-bar"
              style={{ width: `${stat.base_stat}%` }}
            >
              {stat.base_stat}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Status;
