import React from 'react';
import { Typography, Box } from '@mui/material';
import Navbar from "../components/Navbar";
import "../styles/AboutPage.css";

function AboutPage() {
    return (
        <Box className="about-container">
            <Navbar />
            <Typography variant="h4" className="about-header" gutterBottom>
                About Catbooks
            </Typography>
            <Typography className="about-content">
                <span className="highlight">Catbooks</span> adalah aplikasi yang dirancang untuk para pecinta kucing di seluruh dunia. 
                Dengan <span className="highlight">Catbooks</span>, Anda dapat menemukan:
                <ul>
                    <li>Foto-foto kucing lucu dari berbagai ras.</li>
                    <li>Informasi menarik tentang berbagai jenis kucing, termasuk asal-usul, sifat, dan rentang hidup mereka.</li>
                    <li>Platform yang ramah pengguna untuk menjelajahi keunikan dunia kucing.</li>
                </ul>
            </Typography>
            <Typography className="about-content">
                Aplikasi ini bertujuan untuk memberikan pengalaman yang menyenangkan sekaligus edukatif bagi pecinta kucing. 
                Dengan antarmuka yang sederhana dan intuitif, Catbooks menghubungkan Anda dengan keindahan dan keajaiban dunia kucing. 
                Bergabunglah dengan komunitas kami untuk terus mengeksplorasi keunikan dunia kucing!
            </Typography>
            <Typography className="about-footer">
                &copy; 2024 Catbooks - Made with ❤️ for cat lovers.
            </Typography>
        </Box>
    );
}

export default AboutPage;
