import './App.css';
//Dependencies Imports
import React from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

//Image Imports
import logo from './images/theCodeDesigner.png'

//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faSquareInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Librarry for Font Awesome
library.add(faGithub,faSquareInstagram,faTwitter,faYoutube);

function App() {

  return (
    <Router>
      {/*Header*/}
      <header>
        <nav className='navbar'>

          <Link to={"./"}>
          <img className="navbar__logo" src={logo} alt=""/>
          </Link>
            

        {/* Nav Links */}
        <ul className='navbar__list'>

            <li>
              <Link className='navbar__list__item' to={"./"} >
              Home
              </Link>
            </li>

            <li>
              <Link className='navbar__list__item' to={"./about"} >
                About
              </Link>
            </li>

            <li>
              <Link className='navbar__list__item' to={"./work"} >
                Work
                </Link>
            </li>

            <li>
              <Link 
              className='navbar__list__item' to={"./contact"} >
                Contact
              </Link>
            </li>

        </ul>
        
        {/* Socail Links  */}
        <div className="navbar__socials">
        <a href="https://github.com/theCodeDesigner" target='_blank'>
          <FontAwesomeIcon className='navbar__socials__icon' icon={faGithub} />
        </a>

        <a href="https://instagram.com/thecode_designer?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
          <FontAwesomeIcon className='navbar__socials__icon' icon={faSquareInstagram} />
        </a>

        <a href="https://twitter.com/CodeDesignr" target='_blank'>
          <FontAwesomeIcon className='navbar__socials__icon' icon={faTwitter} />
        </a>

        <a href="https://youtube.com/@TheCodeDesigner" target='_blank'>
          <FontAwesomeIcon className='navbar__socials__icon' icon={faYoutube} />
        </a>
        
        </div>

        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>
      <p>© 2023 The Code Designer</p>
      </footer>
      {/* Routes */}
      
    </Router>
  );
}

export default App;
