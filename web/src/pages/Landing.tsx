import React from 'react';
import {FiArrowRight} from 'react-icons/fi';
import {Link} from  'react-router-dom';

import '../styles/pages/landing.css';

import logoImg from '../images/Logo.svg';


function Landing(){
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="Happy"></img>
  
          <main>
            <h1>Happy, leve Happy</h1>
            <p>Visite</p>  
          </main>
  
          <div className="location">
            <strong>Guarda</strong>
            <span>Guarda</span>
          </div>
  
          <Link to="/OrphanagesMap" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"></FiArrowRight>
          </Link>
        </div>
      </div>
    );
}

export default Landing;
