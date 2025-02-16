import React from 'react';
import { Link } from 'react-router-dom';
import Contacts from '../views/contacts';
import { Button } from 'react-bootstrap';
import "./navbar.css"

function Navbar() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid"> <Link className="navbar-brand" to={"/"}>My App</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span> </button> <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav"> <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                </li>
                    <li className="nav-item">
                        <Link className="nav-link"to={"/hotels"}>hotels</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/contacts"}>Contact</Link>
                    </li>
                </ul> <div class="login" ><Link className="nav-link active" aria-current="page" to={"/login"} >login</Link></div></div>
                 </div> </nav>);
}
export default Navbar