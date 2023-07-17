import React from 'react'
import memoji from '../images/memoji.png'
import './Home.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

//font awesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//Free solid icons 
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const navigate = useNavigate();

  return (
    <div className='home'>
        <div className='home__left'>
        <h1 className='home__left__text'>
            <span className="home__greet">Hi There</span> 👋🏻
            <br />
            I'm Balázs <span className="home__name">Gazdag!</span>
            <br />
             <span className="the-code-designer">&lt; theCodeDesigner /&gt;</span>
        </h1>
        <h2>
            I'm a <span className="home__title">Frontend Developer</span> & <span className="home__title">Graphic Designer</span>
        </h2>
        <div className="home__left__cta">
            <button onClick={()=> navigate("./about")} className='home__left__button' >About me..</button>
            
            
            <Link className='home__left__cta__link' to={"./work"}>See My Work <FontAwesomeIcon icon={faArrowUp} className='faArrowUp' /></Link>
        </div>
        </div>
        <div className="home__right">
            <img className='home__right__image' src={memoji} alt=""/>
        </div>
    </div>
  )
}

export default Home