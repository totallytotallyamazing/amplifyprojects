import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <React.Fragment>
            <h2>NavBar</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-expand-sm fixed-top">
                <div className="container">

                    <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link to={'/'} className="navbar-brand">Redux Toolkit</Link>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                    
                        <ul className="navbar-nav mt-2 mt-sm-0">
                            <li className="nav-item">
                                <Link to={'/employees'} className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Employees</span></Link>
                                <Link to={'/employees'} className="nav-link d-none d-sm-block">Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/counter'} className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Counter</span></Link>
                                <Link to={'/counter'} className="nav-link d-none d-sm-block">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/users'} className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Users</span></Link>
                                <Link to={'/users'} className="nav-link d-none d-sm-block">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/rowcol'} className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">RowCol</span></Link>
                                <Link to={'/rowcol'} className="nav-link d-none d-sm-block">RowCol</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/carousels'} className="nav-link d-sm-none"><span data-bs-target="#navbarNav" data-bs-toggle="collapse">Carousels</span></Link>
                                <Link to={'/carousels'} className="nav-link d-none d-sm-block">Carousels</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
};

export default NavBar;