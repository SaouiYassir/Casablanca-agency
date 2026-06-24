import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../../Components/Header/Header";
import pic from "../../assets/Hero-Background.png"
import './About.css'

function About() {
    return (
        <>
            <div className='about-comtainer'>
                <h2>Casablanca Location</h2>
                <div className='infos'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4893.47389997062!2d-8.043333087877913!3d31.588215101498943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafef33724827bf%3A0x3ba431ba5cc62a46!2sCIH%20MARRAKECH!5e0!3m2!1sfr!2sma!4v1782326705997!5m2!1sfr!2sma"
                        width="600"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default About;