import React, { Component } from 'react';
import './Partners.css';
import data from './source';

class Partners extends Component {
  render() {
    const partnerLogos = data.map((partner, index) => (
      <img
        key={index}
        src={partner.photoUrl}
        className='PartnerLogo'
        alt={partner.name} />
    ))

    return (
      <div className="PartnersContainer">
        <h1 className='PartnersTitle'>
          Наші партнери
        </h1>
        <div className='PartnersWrapper'>
          {partnerLogos}
        </div>
      </div>
    );
  }
}

export default Partners;
