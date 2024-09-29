/*
Layout.jsx
Patrick Maguire
301424195
Sept/28/2024
*/
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../src/assets/PM_logo.jpg';

export default function Layout() {
    return (
    <>
    <img src={Logo} alt='logo' id="logo"/>
    <h1 id="title">My Portfolio</h1>
        <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/project">Project</Link> | <Link to="/contact">Contact</Link>
        </nav>
    <hr />

 
 
     </>
 );
}