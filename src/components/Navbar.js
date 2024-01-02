import React from 'react';
import logo from '../assets/logo-light.jpg';
import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light Navbar" id="nav-menu">
            <div className='container'>
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" className="Navbar-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul className="navbar-nav Navbar-content">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/news">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/merchandise">Merchandise</a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-success my-2 my-sm-0 Navbar-login-btn" id="login">
                        <span>Login</span>
                    </button>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
