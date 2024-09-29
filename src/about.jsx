/*
about.jsx
Patrick Maguire
301424195
Sept/28/2024
*/
import React from "react";
import resume from './assets/Patrick resume.pdf'
export default function About() {
        return (
        <>
            <h3>About Me:</h3>
            <p>My name is Patrick Juris Maguire, and I have lived in Toronto my entire life. 
                I am currently a full-time student in the Software Engineering Technology A.I. program at Centennial College. 
                This webpage is part of my first assignment in my Web Application Development course, showcasing my commitment 
                to learning and skill development. I am eager to continually improve my technical skills and explore how to 
                apply them in various aspects of my work. Outside of my studies, I enjoy working out and spending quality time 
                playing board games with friends and family.</p>
            <p> Here is my <a href={resume}>Resume</a></p>
        </>
        );
    }