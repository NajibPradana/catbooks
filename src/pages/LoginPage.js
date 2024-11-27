import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function LoginPage() {
    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('user');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        // Login logic here (e.g., check credentials)
        if (username && password) {
            console.log('Login berhasil:', username);
            // Redirect to the Home page if login is successful
            navigate('/home');
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
            <Typography variant="h4" gutterBottom>Login to Catbooks</Typography>
            <TextField
                label="Username"
                variant="outlined"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
                Login
            </Button>
        </Box>
    );
}

export default LoginPage;
