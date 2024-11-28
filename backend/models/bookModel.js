const db = require('../database'); 
exports.getBookById = (id, callback) => {
  const query = 'SELECT * FROM Book WHERE id = ?'; 
  db.query(query, [id], (err, results) => {
    if (err) {
      return callback(err, null);
    }
    if (results.length === 0) {
      return callback(null, null);  
    }
    callback(null, results[0]); 
  });
};
