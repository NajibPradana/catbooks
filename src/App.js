import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import BreedListPage from './pages/BreedListPage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import CatDetailPage from './pages/CatDetailPage';
import BreedDetailPage from './pages/BreedDetailPage'; 

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/breeds" element={<BreedListPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/cat/:catId" element={<CatDetailPage />} />
                <Route path="/breeds/:breedId" element={<BreedDetailPage />} />

            </Routes>
        </Router>
    );
}

export default App;
