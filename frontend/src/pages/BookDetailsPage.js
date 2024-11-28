import React, { useState, useEffect } from 'react'; // Import useEffect
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../services/api'; // Import the API function from api.ts
import ReviewList from '../components/ReviewList';
import ReviewForm from '../components/ReviewForm';
import './BookDetailsPage.css';

const BookDetailsPage = () => {
  const { id } = useParams(); 
  const [bookDetails, setBookDetails] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    console.log(`Navigating to Book ID: ${id}`);
    setImageUrl(`/images/${id}.png`);

    getBookDetails(id)
      .then(data => {
        setBookDetails(data); 
        setLoading(false); 
      })
      .catch(err => {
        console.error("Error fetching book details:", err);
        setError("Error fetching book details."); 
        setLoading(false); 
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>{error}</div>; 
  }

  return (
    <div className="book-details-container">
      <h1>Book Details for Book ID: {id}</h1>
      
      
      <div className="book-image">
        <img src={imageUrl} alt={`Book ${id}`} />
      </div>


      {bookDetails && (
        <div className="book-info">
          <h2>{bookDetails.title}</h2>
          <p>{bookDetails.description}</p>
          <p><strong>Author:</strong> {bookDetails.author}</p>
          <p><strong>Published:</strong> {bookDetails.publishedDate}</p>
        </div>
      )}


      <ReviewForm bookId={id} />
      <ReviewList bookId={id} />
    </div>
  );
};

export default BookDetailsPage;
