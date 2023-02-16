import React from "react";

export default function NavBar({ currentPage, handlePageChange }) {
    console.log(currentPage)

    return (
        <nav>
            <a
                href="#about"
                onClick={() => handlePageChange('AboutMe')}
            >
                About Me
            </a>
            <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
            >
                Portfolio
            </a>
            <a
                href="#contact/resume"
                onClick={() => handlePageChange('ContactResume')}
            >
                Contact/Resume
            </a>
        </nav>
    );
}