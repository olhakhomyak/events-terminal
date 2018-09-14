import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import fbLogo from '../../assets/social/fb.png';
import instLogo from '../../assets/social/inst.png';
import twLogo from '../../assets/social/tw.png';
import ytbLogo from '../../assets/social/ytb.png';

const footer = () => {
  const socials = ['fb', 'inst', 'tw', 'ytb']
  const socialsList = socials.map((item, key) => {
    return (
      <div className='FooterLogoWrapper'>
        <img
          src={ require(`../../assets/social/${item}.png`) }
          alt={ item }
          className='FooterLogo'
          />
      </div>
    );
    }
  )

  return (
    <footer className='FooterContainer'>
      <h1 className='FooterTitle'>
        Найбільший агрегатор подій у світі
      </h1>
      <h3 className='FooterSubtitle'>
        Пильнуй за нами
      </h3>
      <div className='FooterLogosWrapper'>
        { socialsList }
      </div>
      <p className='FooterRights'>
        2018 / all rights reserved
      </p>
    </footer>
  );
};

export default footer;
