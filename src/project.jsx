/*
project.jsx
Patrick Maguire
301424195
Sept/28/2024
*/
import React from "react";
import BlindDog from "./assets/BlindDog.jpg";
import SRS from "./assets/SRS_sequence_diagram.jpg";
import Csharp from "./assets/CsharpClasses.jpg";
export default function Project(){
    return(
        <>
            <h3>Past Projects:</h3>

            <img src={BlindDog} alt="blind dog" id="blindDog"/>
            <h4>Blind Dog Agent:</h4>
            <p>In this project for my Introduction to Artificial Intelligence course,
                I had to adjust the python script to allow a simple reflex agent (a blind dog walking through a park environment) 
                to bark at a Person the dogs current location. </p>

            <img src={SRS} alt="sequence diagram" id="diagram"/>
            <h4>SRS document:</h4>
            <p>In this project for my Software Requirements Engineering course, 
                I worked with 3 other students to create a Software Requirements Specification document
                about an imaginary mobile app called Scan Brief. Some of my contributions include this sequence diagram, product discription, user stories, domain class diagram and others.</p>

            <img src={Csharp} alt="C sharp" id="Csharp"/>
            <h4>C Sharp programming concepts:</h4>
            <p>This project in my programming 2 course involved my having to implement various programming concepts such as linq, lists, delegates and generic methods.</p>
        </>
    );
}