import React, { useState, useEffect } from "react";
import { getReviews, addReview, updateReview } from "./../services/api"; // Import necessary API functions
import Swal from "sweetalert2";
import ReviewForm from "./ReviewForm"; // Import ReviewForm component

const Reviews = ({ bookId }) => {
  const [reviews, setReviews] = useState([]); // State to hold fetched reviews
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    console.log(bookId); // Log bookId to confirm it's being passed

    // Fetch reviews for a specific book using the `getReviews` function
    getReviews(bookId)
      .then((response) => {
        setReviews(response.data); // Set reviews data to state
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, [bookId]); // Run whenever `bookId` changes

  // Function to handle adding or updating reviews
  const handleAddOrUpdateReview = async (reviewToEdit, reviewData) => {
    try {
      if (reviewToEdit) {
        // If there's a review to edit, update it
        await updateReview(reviewToEdit.id, reviewData);
        Swal.fire("Success", "Review updated successfully!", "success");
      } else {
        console.log("reviewData", reviewData);
        // Otherwise, create a new review
        await addReview(reviewData);
        Swal.fire("Success", "Review added successfully!", "success");
      }
      // After adding or updating, refresh the reviews
      getReviews(bookId)
        .then((response) => setReviews(response.data))
        .catch((error) =>
          console.error("Error fetching updated reviews:", error)
        );
    } catch (error) {
      Swal.fire(
        "Error",
        "An error occurred while submitting the review",
        "error"
      );
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Reviews for Book ID: {bookId}</h2>

      {loading ? (
        <p>Loading reviews...</p> // Display loading message
      ) : (
        <div>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <h3>{review.title}</h3>
                  <p>{review.author}</p>
                  <p>Rating: {review.rating}</p>
                  <p>{review.review_text}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available for this book.</p>
          )}
        </div>
      )}

      {/* ReviewForm for adding or editing a review */}
      <ReviewForm
        reviewToEdit={null} // Pass reviewToEdit as null for adding a new review
        onSuccess={(reviewToEdit, reviewData) =>
          handleAddOrUpdateReview(reviewToEdit, reviewData)
        }
      />
    </div>
  );
};

export default Reviews;
