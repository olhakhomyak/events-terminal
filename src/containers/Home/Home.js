import React, { Component } from 'react';
import './Home.css';

import WelcomeScreen from '../WelcomeScreen/WelcomeScreen';
import Counter from '../../components/Counter/Counter';
import About from '../About/About';
import Photos from '../Photos/Photos';
import Feedbacks from '../Feedbacks/Feedbacks';
import Partners from '../Partners/Partners';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeScreen />
        <Counter />
        <hr />
        <About />
        <hr />
        <Photos />
        <Feedbacks />
        <Partners />
      </div>
    );
  }
}

export default Home;
