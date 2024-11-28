const reviewModel = require("../models/reviewModel");

// Controller to get reviews by book ID
exports.getReviews = (req, res) => {
  const { bookId } = req.params;
  console.log("Fetching reviews for book ID:", bookId);

  reviewModel.getReviewsByBookId(bookId, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error fetching reviews", error: err });
    }
    res.status(200).json(results); // Set status code explicitly
  });
};

// Controller to add a new review
exports.createReview = (req, res) => {
  const { bookId, title, author, rating, review_text } = req.body;

  // Validate required fields
  if (!bookId || !title || !author || !rating || !review_text) {
    return res.status(400).json({ message: "All fields are required." });
  }

  reviewModel.createReview(
    bookId,
    title,
    author,
    rating,
    review_text,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error adding review", error: err });
      }
      res.status(201).json({
        message: "Review added successfully",
        reviewId: results.insertId,
      });
    }
  );
};

// Controller to update an existing review
exports.updateReview = (req, res) => {
  const { id } = req.params;
  const { title, author, rating, review_text } = req.body;

  // Validate required fields
  if (!title || !author || !rating || !review_text) {
    return res
      .status(400)
      .json({ message: "Title, author, rating, and review_text are required" });
  }

  reviewModel.updateReview(
    id,
    title,
    author,
    rating,
    review_text,
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error updating review", error: err });
      }
      if (results.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: `Review with ID ${id} not found` });
      }
      res.status(200).json({ message: "Review updated successfully" });
    }
  );
};

// Controller to delete a review
exports.deleteReview = (req, res) => {
  const { id } = req.params;

  reviewModel.deleteReview(id, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error deleting review", error: err });
    }
    if (results.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: `Review with ID ${id} not found` });
    }
    res.status(200).json({ message: "Review deleted successfully" });
  });
};
