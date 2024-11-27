import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/CatDetailPage.css";

function CatDetailPage() {
  const { catId } = useParams();

  return (
    <div className="cat-detail-page">
      <Navbar />
      <div className="cat-detail-card">
        <img
          src={`https://cdn2.thecatapi.com/images/${catId}.jpg`}
          alt="Cat"
        />
        <h2>Cute Cat</h2>
        <p>
          <span className="label">Description:</span> This is a detailed
          description of the selected cat.
        </p>
        <p>
          <span className="label">Temperament:</span> Friendly, Playful
        </p>
      </div>
    </div>
  );
}

export default CatDetailPage;
