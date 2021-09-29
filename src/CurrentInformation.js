import React from "react";
import "./CurrentInformation.css";

export default function CurrentInformation() {
  return (
    <div className="CurrentInformation">
      <ul className="row">
        <li className="col-3">
          <span className="variables-border-identifier CurrentInformation"></span>
          <div className="margin-left-12">
            Temperature <br />
            <i className="fas fa-temperature-low"></i>
            <span className="temperature-Min">12</span>
            <span className="temp-type">°C</span> /
            <strong>
              <span className="temperature-Max">24</span>
              <span className="temp-type">°C</span>
            </strong>
            <i className="fas fa-temperature-high"></i>
          </div>
        </li>
        <li className="col-3">
          <span className="variables-border-identifier uv"></span>
          <div className="margin-left-12">
            Feels Like
            <br />
            <i className="fas fa-feather-alt"></i>
            <span className="feel-like">18°</span>
          </div>
        </li>
        <li className="col-3">
          <span className="variables-border-identifier"></span>
          <div className="margin-left-12">
            Humidity
            <br />
            <i className="fas fa-tint"></i>
            <span className="humidity"> 17 %</span>
          </div>
        </li>
        <li className="col-3">
          <span className="variables-border-identifier wind"></span>
          <div className="margin-left-12">
            Wind
            <br />
            <i className="fas fa-wind"></i>
            <span className="wind-speed">WSW 14 km/h</span>
          </div>
        </li>
      </ul>
    </div>
  );
}