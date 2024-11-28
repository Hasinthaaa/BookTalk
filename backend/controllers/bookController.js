const bookModel = require('../models/bookModel');

exports.getBookDetails = (req, res) => {
  const { id } = req.params; 

  bookModel.getBookById(id, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching book details', error: err });
    }
    if (!result) {
      return res.status(404).json({ message: `Book with ID ${id} not found` });
    }
    res.json(result);  
  });
};
