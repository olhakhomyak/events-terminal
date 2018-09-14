import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css';

const Header = (props) =>   {
  let attachedClasses = ['HeaderContainer', 'HeaderColoured']
  if(props.isTop) {
    attachedClasses = ['HeaderContainer', 'HeaderTransparent']
  }

  return (
    <header className={attachedClasses.join(' ')} >
      <NavLink to='/' exact className='HeaderLogoLink' >
        <img className='MainLogo' src={logo} />
        <span> Events Terminal </span>
      </NavLink>
      <nav className='HeaderNavlist'>
        <NavLink to='/about' className='HeaderLink'>
          Принцип роботи
        </NavLink>
        <NavLink to='/photo' className='HeaderLink'>
          Галерея
        </NavLink>
        <NavLink to='/events' className='HeaderLink'>
          Події
        </NavLink>
      </nav>
  </header>
  )
};

export default Header;