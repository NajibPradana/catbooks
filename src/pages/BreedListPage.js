import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import "../styles/BreedListPage.css";
import Navbar from "../components/Navbar";

function BreedListPage() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds", {
      headers: {
        "x-api-key": process.env.REACT_APP_CAT_API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => setBreeds(data))
      .catch((error) => console.error("Error fetching breeds:", error));
  }, []);

  return (
    
    <Box className="breed-list-container">
     <Navbar/>
  <Typography variant="h4" gutterBottom>Cat Breeds</Typography>
  <List className="breed-list">
    {breeds.map((breed) => (
      <ListItem key={breed.id} className="breed-list-item">
        <Link
          to={`/breeds/${breed.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemText primary={breed.name} />
        </Link>
      </ListItem>
    ))}
  </List>
</Box>

  );
}

export default BreedListPage;
