// src/services/api.js
import axios from 'axios';

// Configure axios with a base URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Base URL for the backend
});

export const getReviews = (bookId) => {
  return axios.get(`/reviews?bookId=${bookId}`);
}

// export const addReview = (review) => API.post('/reviews', review);
// export const updateReview = (id, review) => API.put(`/reviews/${id}`, review);
// export const deleteReview = (id) => API.delete(`/reviews/${id}`);

export const getBookDetails = (id) => 
  API.get(`/books/${id}`);
