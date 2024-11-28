const reviewModel = require('../models/reviewModel');

// Controller to get all reviews
exports.getReviews = (req, res) => {
  const { bookId } = req.query;  // Extract bookId from query string
  reviewModel.getReviewsByBookId(bookId, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching reviews', error: err });
    }
    res.json(results);
  });
};

// Controller to add a new review
exports.addReview = (req, res) => {
  const { title, author, rating, review_text } = req.body;  // Ensure the correct fields are extracted

  // Basic validation
  if (!title || !author || !rating || !review_text) {
    return res.status(400).json({ message: 'Title, author, rating, and review_text are required' });
  }

  reviewModel.createReview(title, author, rating, review_text, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error creating review', error: err });
    }
    res.status(201).json({ message: 'Review created successfully', id: results.insertId });
  });
};

// Controller to update an existing review
exports.updateReview = (req, res) => {
  const { id } = req.params;
  const { title, author, rating, review_text } = req.body;  // Ensure correct fields are used

  if (!title || !author || !rating || !review_text) {
    return res.status(400).json({ message: 'Title, author, rating, and review_text are required' });
  }

  reviewModel.updateReview(id, title, author, rating, review_text, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error updating review', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: `Review with ID ${id} not found` });
    }
    res.json({ message: 'Review updated successfully' });
  });
};

// Controller to delete a review
exports.deleteReview = (req, res) => {
  const { id } = req.params;

  reviewModel.deleteReview(id, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error deleting review', error: err });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: `Review with ID ${id} not found` });
    }
    res.json({ message: 'Review deleted successfully' });
  });
};
