import React from "react";
import "./Review.css"; // Assuming we have a CSS file for custom styles

const Review = ({ review, onEdit, onDelete }) => (
  <div className="review-card">
    <h3 className="review-title">{review.title}</h3>
    <p className="review-author">{review.author}</p>
    <div className="review-rating">
      <span>Rating:</span> <strong>{review.rating}</strong>
    </div>
    <p className="review-text">{review.review_text}</p>
    <div className="button-container">
      <button className="edit-button" onClick={() => onEdit(review)}>
        Edit
      </button>
      <button className="delete-button" onClick={() => onDelete(review.id)}>
        Delete
      </button>
    </div>
  </div>
);

export default Review;
