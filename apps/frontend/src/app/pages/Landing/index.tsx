import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../../services/api';

import './styles.scss';

import Logo from '@images/logo.svg';
import landingImg from '@images/landing.svg';

import studyIcon from '@icons/study.svg';
import giveClassesIcon from '@icons/give-classes.svg';
import purpleHeartIcon from '@icons/purple-heart.svg';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);
  useEffect(() => {
    api
      .get('/connections')
      .then((response) => setTotalConnections(response.data.totalConnections));
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Coração Roxo" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
