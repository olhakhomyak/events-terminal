import React, { Component } from 'react';
import './Feedbacks.css';
import Feedback from '../../components/Feedback/Feedback';
import data from './source';

class Feedbacks extends Component {
  render() {
    const feedbacksList = data.map((author, index) => (
      <Feedback key={index} author={author} />
    ))

    return (
      <div className='FeedbackContainer'>
        <h1 className='FeedbackTitle'>Про нас говорять</h1>
        <div className='FeedbacksWrapper'>
          {feedbacksList}
        </div>
      </div>
    );
  }
}

export default Feedbacks;