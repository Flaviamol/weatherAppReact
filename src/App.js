import React from "react";
import "./App.css";
import CurrentTemperature from "./CurrentTemperature";
import CurrentInformation from "./CurrentInformation";
import Search from "./Search";
import Footer from "./Footer";

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
            <CurrentInformation />
          </section>
          <section className="card Search">
            <Search />
          </section>
          <section className="Footer">
            <Footer />
          </section>
        </div>
        <script src="src/index.js"></script>
      </body>
    </div>
  );
}