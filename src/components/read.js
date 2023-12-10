// Read.js

import { useEffect, useState } from "react";
import axios from "axios";
import Trips from "./trips";
import Search from "./search";
import { footerStyle, Footer } from './footer'; // Adjust the path based on your project structure

function Read() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/trips")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const reload = () => {
    axios.get("http://localhost:4000/api/trips")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSearch = (searchTerm) => {
    const filteredTrips = data.filter((trip) =>
      trip.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredTrips);
  };

  return (
    <div style={{ position: "relative" }}>
      <h2>Trips List</h2>
      <Search onSearch={handleSearch} />
      <Trips myTrips={filteredData.length > 0 ? filteredData : data} ReloadData={reload} />
      <Footer />
    </div>
  );
}

export default Read;
