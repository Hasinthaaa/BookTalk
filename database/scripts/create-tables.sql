CREATE TABLE Book (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    author_name VARCHAR(100) NOT NULL,
    publication_date DATE,
    genre VARCHAR(50),
    isbn VARCHAR(20) UNIQUE,
    price DECIMAL(10, 2),
    pages INT,
    language VARCHAR(50),
    publisher VARCHAR(100)
);

CREATE TABLE reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bookId INT NOT NULL,  -- Add bookId column
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  rating INT(1) NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT NOT NULL,
  date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (bookId) REFERENCES Book(id)  -- Set bookId as a foreign key referencing Book(id)
);
