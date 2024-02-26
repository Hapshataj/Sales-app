import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

function Navbar() {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogout = () => {
        setLoggedIn(true);
    };

    const authButton = isLoggedIn ?
        <button className="nav-link btn btn-link" onClick={handleLogout}>Logout</button>
        :
        <NavLink to="/login" className="nav-link" activeclassname="active">Login</NavLink>
        ;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow fixed-top">
            <div className="container-fluid ps-3">
                <a className="navbar-brand fs-3 fw-bold " href="#">Sales App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to="/addsales" className="nav-link" activeclassname="active">Add Sales</NavLink>
                        <NavLink to="/topsale" className="nav-link" activeclassname="active">Top Sales</NavLink>
                        <NavLink to="/totalrevenue" className="nav-link" activeclassname="active">Today's Total Revenue</NavLink>
                        <NavLink to="/register" className="nav-link" activeclassname="active">Register</NavLink>
                        {authButton}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
