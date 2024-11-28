import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReviewForm = ({ reviewToEdit, onSuccess }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [rating, setRating] = useState(1);
  const [reviewText, setReviewText] = useState('');

  // When reviewToEdit changes, update the form fields
  useEffect(() => {
    if (reviewToEdit) {
      setTitle(reviewToEdit.title);
      setAuthor(reviewToEdit.author);
      setRating(reviewToEdit.rating);
      setReviewText(reviewToEdit.review_text);
    }
  }, [reviewToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = { title, author, rating, review_text: reviewText };

    if (reviewToEdit) {
      // Update the review
      axios.put(`/api/reviews/${reviewToEdit.id}`, reviewData)
        .then(() => onSuccess())
        .catch(err => console.error('Error updating review:', err));
    } else {
      // Add a new review
      axios.post('/api/reviews', reviewData)
        .then(() => onSuccess())
        .catch(err => console.error('Error adding review:', err));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Book Title" required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} min="1" max="5" required />
      <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} placeholder="Review" required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
