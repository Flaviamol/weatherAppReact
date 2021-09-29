import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <ul className="row">
        <li className="col-6">
          <input
            type="text"
            className="input-search"
            placeholder="Enter another city"
          />
        </li>
        <li className="col-3 text-end">
          <input
            type="submit"
            className="btn btn-outline-secondary"
            value="Search"
          />
        </li>
        <li className="col-3">
          <input
            type="button"
            id="current-city-btn"
            className="btn btn-outline-secondary"
            value="Current City"
          />
        </li>
      </ul>
      <form id="search-city"></form>
    </div>
  );
}