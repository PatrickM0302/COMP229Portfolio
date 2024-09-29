/*
Home.jsx
Patrick Maguire
301424195
Sept/28/2024
*/
import react from 'react';
import {Link} from 'react-router-dom';
export default function Home(){
    return <>
    <p>Welcome to my portfolio page. This is my first web application I've built using React.</p>
    <p>Please check visit the <Link to='/about'>About</Link> me page or <Link to='/services'>Services</Link>.</p>
    <p>My goal is to work in the software industry and develop revolutionary technology.</p>
    </>
}