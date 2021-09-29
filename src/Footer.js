import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <p className="text-center">
        <a
          href="https://github.com/Flaviamol/Weather-project"
          target="_blank"
          rel="noreferrer"
          className="link-open-source"
        >
          Open-Source code{" "}
        </a>
        by Flávia Mól and
        <a
          href="https://nifty-yalow-6e0e37.netlify.app"
          target="_blank"
          rel="noreferrer"
          className="link-open-source"
        >
          {" "}
          hosted on Netlify{" "}
        </a>
        .
      </p>
    </div>
  );
}