import './App.css';
//Dependencies Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//Pages Imports
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import NotFound from './pages/NotFound';
import Home from './pages/Home';

//Image Imports
import logo from './images/theCodeDesigner.png'
import footerLogo from './images/theCodedesigner_footer.png'

//Font Awesome Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faSquareInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Librarry for Font Awesome
library.add(faGithub,faInstagram,faTwitter,faYoutube);

function App() {

 

  return (
    <Router basename='/react-cv'>
      
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
          <FontAwesomeIcon className='navbar__socials__icon' icon={faInstagram} />
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <footer>
        <div className="footer-upper">

          <div className="footer__site-links">
            <h4>Site Links</h4>
            <Link to={"./"}>Home</Link>
            <Link to={"./"}>About</Link>
            <Link to={"./"}>Work</Link>
            <Link to={"./"}>Contact</Link>
          </div>
          <div className='footer__logo'>
            <img src={footerLogo} alt="theCodeDesigner logo" />
          </div>
          <div className="footer-socials">
            <h3>Social Media!</h3>
            <p>Follow me on social media to find out about the my latest progresses...😉👋🏻</p>
            <div className="footer__socials__icons">
              
              <a href="https://github.com/theCodeDesigner" target='_blank'>
                <FontAwesomeIcon className='footer-socials__icon' icon={faGithub} />
              </a>
              <a href="https://instagram.com/thecode_designer?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'>
                <FontAwesomeIcon className='footer-socials__icon' icon={faInstagram} />
              </a>
              <a href="https://twitter.com/CodeDesignr" target='_blank'>
                <FontAwesomeIcon className='footer-socials__icon' icon={faTwitter} />
              </a>
              <a href="https://youtube.com/@TheCodeDesigner" target='_blank'>
                <FontAwesomeIcon className='footer-socials__icon' icon={faYoutube} />
              </a>
            </div>
          </div>
               
        </div>
        <div className="divider"></div>
      <div className="legal">
        <p>© 2023 The Code Designer</p>
        <div className="legal__docs">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Security</p>
          <p>Sitemap</p>
        </div>
      </div>
      </footer>
      {/* Routes */}
      
    </Router>
  );
}

export default App;
