import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/HomePage.css";

function HomePage() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=100", {
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.error("Error fetching cats:", error));
  }, []);

  return (
    <div className="home-page">
      <Navbar />
      <h1>Welcome to CatBooks</h1>
      <div className="cat-grid">
        {cats.map((cat, index) => (
          <Link to={`/cat/${index}`} key={index} className="cat-card">
            <img src={cat.url} alt="Cat" />
            <div className="cat-card-content">
              <h2>Cute Cat</h2>
              <p>Click to see details</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
