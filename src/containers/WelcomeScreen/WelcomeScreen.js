import React, { Component } from 'react';
import './WelcomeScreen.css';

class WelcomeScreen extends Component {
  render() {
    return (
      <div className="WelcomeContainer">
        <h1 className='WelcomeTitle'> 
            Найбільший агрегатор подій у світі
        </h1>
        <button className='WelcomeBtn'>
            <span>Переглянути події</span>
        </button>
      </div>
    );
  }
}

export default WelcomeScreen;
