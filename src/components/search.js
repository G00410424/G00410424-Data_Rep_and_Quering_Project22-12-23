// Search.js - to search for specific trips on the read page.

// Import necessary modules
import React, { useState } from "react";

// Styling for the search container
const searchContainerStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  textAlign: "right",
};

// Functional component representing the search input and button
function Search({ onSearch }) {
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the search and invoke the onSearch callback
  const handleSearch = () => {
    onSearch(searchTerm);
  };

  // Render the Search component
  return (
    <div style={searchContainerStyle}>
      <input
        type="text"
        placeholder="Search for a trip..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search for a Trip</button>
    </div>
  );
}

// Exporting the Search component for use in other files
export default Search;
