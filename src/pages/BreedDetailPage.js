import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Box, CircularProgress } from "@mui/material";
import "../styles/BreedDetailPage.css";
import Navbar from "../components/Navbar";

function BreedDetailPage() {
  const { breedId } = useParams();
  const [breed, setBreed] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const selectedBreed = data.find((b) => b.id === breedId);
        setBreed(selectedBreed);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching breed detail:", error);
        setLoading(false);
      });
  }, [breedId]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <CircularProgress />
      </div>
    );
  }

  if (!breed) {
    return (
      <div className="not-found">
        <Typography variant="h6">Breed not found.</Typography>
      </div>
    );
  }

  return (
    <Box className="breed-detail-container">
      <Navbar />
      <Typography variant="h4" gutterBottom>
        {breed.name}
      </Typography>
      <div className="breed-info">
        <Typography variant="body1" gutterBottom>
          <span>Temperament:</span> {breed.temperament}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <span>Origin:</span> {breed.origin}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <span>Life Span:</span> {breed.life_span} years
        </Typography>
      </div>
      <Link to="/breeds" className="back-button">
        Back to Breed List
      </Link>
    </Box>
  );
}

export default BreedDetailPage;
