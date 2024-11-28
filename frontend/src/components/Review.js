import React from 'react';

const Review = ({ review, onEdit }) => (
  <div className="review-container">
    <h3>{review.title}</h3>
    <p>{review.author}</p>
    <p>Rating: {review.rating}</p>
    <p>{review.review_text}</p>
    <button onClick={() => onEdit(review)}>Edit</button>
  </div>
);

export default Review;
