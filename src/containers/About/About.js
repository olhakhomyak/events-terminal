import React, { Component } from 'react';
import './About.css';

class About extends Component {
  state = {  }
  render() {
    return (
      <div className='AboutContainer'>
        <h1 className='AboutTitle'>
          Як це працює?
        </h1>
        <div className='AboutBlocks'>
          <div className='BlockItem'>
            <span>Організаторам</span>
          </div>
          <div className='BlockItem'>
            <span>Користувачам</span>
          </div>
        </div>
      </div>
    );
  }
}

export default About;