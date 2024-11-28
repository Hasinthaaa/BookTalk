import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => (
  <div className="book-card">
    <img src={book.image} alt={book.title} />
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <Link to={`/books/${book.id}`} className="details-button">
      View Details
    </Link>
  </div>
);

export default BookCard;
