import React from 'react';
import bootstrap from 'bootstrap';
import './style.css';
import LogoImage from "../../images/transLogo.png"
const NavbarComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbarBackgrounColor">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={LogoImage} alt="LogoImage.png" className="logoWidth"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav navbarContainer">
                            <li className="nav-item text-capitalize">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item text-capitalize">
                                <a className="nav-link" href="#">about</a>
                            </li>
                            <li className="nav-item text-capitalize">
                                <a className="nav-link" href="#">contact</a>
                            </li>
                            <li className="nav-item text-capitalize">
                                <a className="nav-link" href="#">price</a>
                            </li>
                            <li className="nav-item text-capitalize">
                                <a className="nav-link" href="#">blog</a>
                            </li>
                            <li className="nav-item text-capitalize">
                                <a className="nav-link" href="#">location</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className=" btn-outline-light searchBtn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent