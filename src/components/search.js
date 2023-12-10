// Search.js

import React, { useState } from "react";

const searchContainerStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  textAlign: "right",
};

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={searchContainerStyle}>
      <input
        type="text"
        placeholder="Search for a trip..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
