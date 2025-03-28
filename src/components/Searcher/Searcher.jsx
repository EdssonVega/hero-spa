import React from "react";
import "./SearcherStyles.css"

export const Searcher = () => {
  return (
    <div className="searcherMainContainer">
      <h2>Searching</h2>
      <hr />
      <input type="text" placeholder="Search a hero"/>
      <button>Search</button>
    </div>
  );
};
