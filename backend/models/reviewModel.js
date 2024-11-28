const db = require("../database"); // Import the database connection

// Get all reviews
exports.getReviewsByBookId = (bookId, callback) => {
  console.log("Reviews--@@@@->", bookId);

  const query = "SELECT * FROM reviews WHERE bookId = ?";
  db.query(query, [bookId], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    console.log("Reviews--->", bookId);
    callback(null, results);
  });
};

// Create a new review
exports.createReview = (
  bookId,
  title,
  author,
  rating,
  review_text,
  callback
) => {
  const query = `
    INSERT INTO reviews (bookId, title, author, rating, review_text)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(
    query,
    [bookId, title, author, rating, review_text],
    (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    }
  );
};

// Update an existing review
exports.updateReview = (id, title, author, rating, review_text, callback) => {
  const query =
    "UPDATE reviews SET title = ?, author = ?, rating = ?, review_text = ? WHERE id = ?";
  db.query(query, [title, author, rating, review_text, id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Delete a review
exports.deleteReview = (id, callback) => {
  const query = "DELETE FROM reviews WHERE id = ?";
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};
