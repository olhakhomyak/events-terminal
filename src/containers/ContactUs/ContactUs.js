import React, {Component} from 'react';
import './ContactUs.css';

class ContactUs extends Component {
  render() {
    return (
      <div className='ContactUsContainer'>
        <h1 className='ContactUsTitle'>
          Давай дружити
        </h1>
        <p className='ContactUsSubtitle'>
          Якщо ти бажаєш бути в курсі цікавих подій та мітапів усього світу або стати нашим партнером - залиш свій Email і ми сконтактуємось з тобою
        </p>
        <form className='ContactUsForm'>
          <input
            type="email"
            className='ContactUsField'
            />
          <button className='ContactUsBtn'>
            Надіслати
          </button>
        </form>
      </div>
    );
  }
}

export default ContactUs;