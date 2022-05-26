import React from "react";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="border-bottom border-2 text-secondary">
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-1 mt-3">
                    <a href="/" className="d-flex align-items-center mb-md-0 me-md-auto text-dark text-decoration-none">
                        <i class="fa-brands fa-digg fa-3x px-2"></i>
                        <span className="fs-4 mr-5">What Code</span>
                    </a>

                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link text-secondary" aria-current="page">ABOUT US<hr></hr></a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-secondary">PROJECTS<hr></hr></a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-secondary">GALLERY<hr></hr></a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-secondary">OUR PROCESS<hr></hr></a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-secondary">TESTIMONIALS<hr></hr></a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-secondary">CARRERS<hr></hr></a></li>
                        <li className="nav-item"><a href="#" className="nav-link text-secondary">CONTACT US<hr></hr></a></li>
                    </ul>
                </header>
            </div>
        </div>
    );
}

export default Navbar;