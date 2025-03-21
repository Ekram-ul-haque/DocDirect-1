import React from 'react'
import "../styles/LandingStyles.css";
import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Banner from './Banner';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
        <nav className="navbar">
            <div className="logo icons">
            <img src="img/logo.png" alt="logo" />
            </div>
            <ul className="nav-list icons">
            <li><a href="#about">About</a></li>
            <li><a href="#specialization">Specialization</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><Link to='/login' className='btn btn-primary p-2 custom-link'>Account</Link></li>
            </ul>
            <div className="burger">
            <div className="line" />
            <div className="line" />
            <div className="line" />
            </div>
        </nav>
        <hr className="h-nav" />
        <Banner />
        <About />
        <ContactUs />
        <Footer />
    </>
  )
}

export default LandingPage