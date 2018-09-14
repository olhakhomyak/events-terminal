import React, { Component } from 'react';
import './Photos.css';
import data from './source';

class Photos extends Component {
  render() {
    const photosList = data.map((link, index) => (
      <div
        style={{backgroundImage:`url(${link})`} }
        className='PhotoItem'
        key={index}
      />
    ))

    return (
      <div className='PhotosContainer'>
        {photosList}
      </div>  
    );
  }
}

export default Photos;