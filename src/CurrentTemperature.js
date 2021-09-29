import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  return (
    <div className="CurrentTemperature">
      <h1>
        <span className="city-name">Lyon</span>, Weather
      </h1>
      <h2 className="current-subtitle">Monday 09:00 am</h2>
      <div className="row">
        <div className="col-4 text-center">
          <span className="current-temperature">26</span>
          <span id="temp-type">
            <a href="#" id="celsius-link" className="active">
              °C
            </a>
            |
            <a href="#" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="col-4 text-center">
          <h3>Clear and Shine</h3>
        </div>
        <div className="col-4 text-center">
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="clear"
            className="current-icon"
          />
        </div>
      </div>
    </div>
  );
}
