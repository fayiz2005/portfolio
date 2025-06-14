import profilePic from '../assets/profilepic.jpg';
import './styles.css'; 
import React from 'react';
import { Link } from 'react-router-dom';

export function PortfolioNavbar() {
  return (

    <>
    


      {/* Desktop horizontal navbar */}
      <div className="custom-navbar d-none d-lg-flex justify-content-center align-items-center px-5 py-2 bg-white shadow-sm">
        <nav className="d-flex justify-content-center align-items-center w-100 px-5">
            <h1 className='Logo'>FAYIZ</h1>
          <Link to="/" className="text-dark text-decoration-none mx-4">Home</Link>
          <Link to="/education" className="text-dark text-decoration-none mx-4">Education</Link>
          <Link to="/contact" className="text-dark text-decoration-none mx-4">Contact</Link>
        </nav>
      </div>
    </>
  );
}


export function Header() {
  return (
    <>
    
    <PortfolioNavbar/>
<h1 className='Logo d-lg-none'>FAYIZ</h1>
<div className="row HeaderBody">
  <div className="col d-flex justify-content-center align-items-center">
    <img src={profilePic} alt="Profile" className="profile-image" />
  </div>
  <div className="col description">
    <span className="highlight">Hi, I’m Fayiz</span><br />
    I’m an aspiring <span className="highlight">Computer Science Major</span><br />
    I'm an incoming student at UBC (just got my Visa).<br />
    I'm also a full-stack developer. Let me help you bring your ideas to life.
  </div>
</div>
      {/* Mobile hamburger button */}

      <button
        className="btn btn-dark m-3 d-lg-none"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
      >
        <i className="bi bi-list"></i> Menu
      </button>

      {/* Sidebar for mobile */}
      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabIndex="-1"
        id="sidebar"
        aria-labelledby="sidebarLabel"
        style={{ width: '220px' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarLabel">
            My Portfolio
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/education">Education</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    
    </>
  )
}
