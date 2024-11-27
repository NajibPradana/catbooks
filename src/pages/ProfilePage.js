import React, { useEffect, useState } from 'react';
import { Typography, Avatar, Box } from '@mui/material';
import Navbar from "../components/Navbar";
import "../styles/ProfilePage.css";

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/NajibPradana')
      .then(response => response.json())
      .then(data => setProfile(data));
  }, []);

  if (!profile) return <Typography>Loading...</Typography>;

  return (
    <Box className="profile-container">
      <Navbar />
      <div className="profile-avatar-container">
        <a 
          href={profile.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="profile-avatar-link"
        >
          <Avatar 
            src={profile.avatar_url} 
            alt={profile.login} 
            className="profile-avatar" 
          />
        </a>
      </div>
      <Typography variant="h5" className="profile-name">
        {profile.name}
      </Typography>
      <Typography variant="body1" className="profile-bio">
        {profile.bio}
      </Typography>
    </Box>
  );
}

export default ProfilePage;
