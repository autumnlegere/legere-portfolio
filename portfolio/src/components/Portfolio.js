import React, { useState } from 'react';
import NavBar from './NavBar';
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import ContactResume from './pages/ContactResume'
import Container from '@mui/material/Container';

export default function Portfolio() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
          return <AboutMe />;
        }
        if (currentPage === 'Projects') {
          return <Projects />;
        }
        return <ContactResume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <Container fixed>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </Container>
    )
}