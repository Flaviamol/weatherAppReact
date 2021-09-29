import React from "react";
import "./App.css";
import CurrentTemperature from "./CurrentTemperature";

export default function App() {
  return (
    <div className="App">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Weather React</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/1f99eb6116.js"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="src/style.css" type="text/css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bona+Nova:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
      </head>
      <body>
        <div className="container">
          <section className="card card-current current">
            <CurrentTemperature />
            <div className="current-information">
              <ul className="row">
                <li className="col-3">
                  <span className="variables-border-identifier temperature-information"></span>
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
          </section>
          <section className="card forecast">
            <form id="search-city">
              <input
                type="text"
                className="input-search"
                placeholder="Enter another city"
              />
              <input
                type="submit"
                className="btn btn-outline-secondary"
                value="Search"
              />
              <input
                type="button"
                id="current-city-btn"
                className="btn btn-outline-secondary"
                value="Current City"
              />
            </form>
          </section>
        </div>
        <p className="text-center">
          <a
            href="https://github.com/Flaviamol/Weather-project"
            target="_blank"
            rel="noreferrer"
            className="link-open-source"
          >
            Open-Source code
          </a>
          by Flávia Mól and
          <a
            href="https://nifty-yalow-6e0e37.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
          .
        </p>

        <script src="src/index.js"></script>
      </body>
    </div>
  );
}
