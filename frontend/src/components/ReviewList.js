import React, { useEffect, useState } from 'react';
import { getReviews } from '../services/api'; 
import Review from './Review';

const ReviewList = ({ bookId, onEdit }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log(bookId);
    getReviews(bookId)  
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => console.error('Error fetching reviews:', error));
  }, [bookId]);

  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default ReviewList;
