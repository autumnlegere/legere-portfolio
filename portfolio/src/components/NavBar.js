import React from "react";

export default function NavBar({ currentPage, handlePageChange }) {
    console.log(currentPage)

    return (
        <nav>
            <a
                href="about"
                onClick={() => handlePageChange('AboutMe')}
            >
                About Me
            </a>
            <a
                href="projects"
                onClick={() => handlePageChange('Projects')}
            >
                Portfolio
            </a>
            <a
                href="resume"
                onClick={() => handlePageChange('Resume')}
            >
                Resume
            </a>
            <a
                href="contact"
                onClick={() => handlePageChange('ContactMe')}
            >
                Contact
            </a>
        </nav>
    );
}