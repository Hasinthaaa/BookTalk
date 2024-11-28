import React, { useState, useEffect, lazy } from "react";
import { useParams } from "react-router-dom";
import { getBookDetails } from "../services/api";
import "./BookDetailsPage.css";

const ReviewForm = lazy(() => import("../components/ReviewForm"));
const ReviewList = lazy(() => import("../components/ReviewList"));

const BookDetailsPage = () => {
  const { id } = useParams();
  const [bookDetails, setBookDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log(`Navigating to Book ID: ${id}`);
    setImageUrl(`/images/${id}.png`);

    getBookDetails(id)
      .then((response) => {
        setBookDetails(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching book details:", err);
        setError("Error fetching book details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="book-details-container">
      <div className="top-section">
        <div className="left-column">
          <div className="book-image">
            <img
              src={imageUrl}
              alt={bookDetails?.title || `Book ${id}`}
              loading="lazy"
            />
          </div>
          <div className="book-info">
            <h2>{bookDetails.title}</h2>
            <p>{bookDetails.description}</p>
            <p>
              <strong>Author:</strong> {bookDetails.author_name}
            </p>
            <p>
              <strong>Published:</strong>{" "}
              {new Date(bookDetails.publication_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="right-column">
          {/* <Suspense fallback={<div>Loading Review Form...</div>}> */}
          <ReviewForm bookId={id} />
          {/* </Suspense> */}
        </div>
      </div>
      <div className="bottom-section">
        {/* <Suspense fallback={<div>Loading Reviews...</div>}> */}
        <ReviewList bookId={id} />
        {/* </Suspense> */}
      </div>
    </div>
  );
};

export default BookDetailsPage;
