import React, { useEffect, useState } from "react";
import { getReviews, deleteReview } from "../services/api"; // API functions for fetching and deleting reviews
import Review from "./Review"; // Import Review component

const ReviewList = ({ bookId, onEdit }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for better UX
  const [error, setError] = useState(null); // Error state for error handling

  // Fetch reviews when the component mounts or when the bookId changes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await getReviews(bookId);
        setReviews(response.data); // Update state with fetched reviews
      } catch (err) {
        setError("Failed to load reviews."); // Handle fetch error
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false); // Update loading state
      }
    };

    fetchReviews();
  }, [bookId]);

  // Delete a review and update the state
  const handleDelete = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review.id !== reviewId)
      );
      alert("Review deleted successfully.");
    } catch (err) {
      console.error("Error deleting review:", err);
      setError("Failed to delete the review."); // Handle delete error
    }
  };

  // Conditional rendering for different states
  if (loading) return <div className="loading">Loading reviews...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="review-list-container">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))
      ) : (
        <p className="no-reviews-message">
          No reviews available for this book yet.
        </p>
      )}
    </div>
  );
};

export default ReviewList;
