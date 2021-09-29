import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  let weatherData = {
    city: "New York",
    weekDay: "Monday",
    hour: "09:00 am",
    description: "Clear and Shine",
    imgUrl: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: "26"
  };
  return (
    <div className="CurrentTemperature">
      <h1>
        <span>{weatherData.city}</span>, Weather
      </h1>
      <h2 className="current-subtitle">{weatherData.weekDay} {weatherData.hour}</h2>
      <div className="row">
        <div className="col-4 text-center">
          <span className="current-temperature">{weatherData.temperature}</span>
          <span id="temp-type">
            <a href="/" id="celsius-link" className="active">
              °C
            </a>
            |
            <a href="/" id="fahrenheit-link">
              °F
            </a>
          </span>
        </div>
        <div className="col-4 text-center">
          <h3>{weatherData.description}</h3>
        </div>
        <div className="col-4 text-center">
          <img
            src={weatherData.imgUrl}
            alt={weatherData.description}
            className="current-icon"
          />
        </div>
      </div>
    </div>
  );
}
