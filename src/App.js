import React from "react";
import "./App.css";
import CurrentTemperature from "./CurrentTemperature";
import CurrentInformation from "./CurrentInformation";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}