import React from 'react';
import './Feedback.css';

const Feedback = ({author}) => {
  return (
    <div className='FeedbackItem'>
      <blockquote>
        {author.quote}
      </blockquote>
      <div className='AuthorDetails'>
        <img src={author.photoUrl} alt={author.name} className='AuthorPhoto' />
        <div className='AuthorInfo'>
          <span className='AuthorName'>
            {author.name}
          </span>
          <span className='AuthorPosition'>
            {author.position}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Feedback;