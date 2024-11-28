

INSERT INTO Book (title, description, author_name, publication_date, genre, isbn, price, pages, language, publisher) 
VALUES 
('To Kill a Mockingbird', 'A story of racial injustice in the American South.', 'Harper Lee', '1960-07-11', 'Historical Fiction', '9780061120084', 14.99, 281, 'English', 'J.B. Lippincott & Co.'),
('The Psychology of Money', 'Timeless lessons on wealth, greed, and happiness.', 'Morgan Housel', '2020-09-08', 'Finance', '9780857197689', 12.99, 256, 'English', 'Harriman House'),
('Charlotte''s Web', 'A children''s classic about friendship, loyalty, and life.', 'E. B. White', '1952-10-15', 'Children''s Literature', '9780064400558', 7.99, 192, 'English', 'Harper & Brothers'),
('I Don''t Love You Anymore', 'Moving on and living your best life.', 'Rithvik Singh', '2023-06-15', 'Self-Help', '9780143456789', 10.50, 240, 'English', 'Penguin India'),
('Game of Thrones', 'A tale of political intrigue, war, and betrayal in a fantasy world.', 'George R. R. Martin', '1996-08-06', 'Fantasy', '9780553103540', 19.99, 694, 'English', 'Bantam Books'),
('All for Love', 'A romantic tale of devotion, sacrifice, and impossible choices.', 'John Dryden', '1678-01-01', 'Drama', '9780140431001', 8.99, 120, 'English', 'Penguin Classics'),
('The Boy Without a Name', 'A heartwarming story about courage, dreams, and self-discovery.', 'Danish Dhamani', '2021-11-10', 'Fiction', '9789391549822', 10.99, 250, 'English', 'Om Books International'),
('The Lion Who Saw Himself in the Water', 'A beautiful fable about self-awareness and inner strength.', 'Hassan S. M', '2019-06-15', 'Children\'s Literature', '9788129903936', 5.99, 64, 'English', 'Rupa Publications'),
('The Man and the Fox', 'An allegorical story about the relationship between a man and a fox.', 'Amitabh Bhattacharya', '2018-03-22', 'Allegory', '9789388043039', 9.99, 150, 'English', 'HarperCollins India');




INSERT INTO reviews (bookId, title, author, rating, review_text) 
VALUES
(1, 'A Heartfelt Review of To Kill a Mockingbird', 'Alice Johnson', 5, 'This book is an absolute masterpiece. The themes of racial injustice and the innocence of childhood are beautifully intertwined. A must-read for everyone.'),
(2, 'Invaluable Lessons from The Psychology of Money', 'Bob Miller', 4, 'A fantastic book that gives you a new perspective on money and wealth. The stories and lessons are timeless, though a bit repetitive at times.'),
(3, 'A Timeless Classic', 'Emma Clark', 5, 'Charlotte\'s Web is a touching and heartwarming story that teaches the value of friendship and loyalty. The story is as relevant today as when it was first written.'),
(4, 'A Journey of Self-Discovery', 'Sophie Williams', 3, 'I Don\'t Love You Anymore is an honest take on relationships and moving on, but I felt the pacing was slow at times. Still, it has some valuable life lessons.'),
(5, 'An Epic Adventure', 'David Brown', 5, 'Game of Thrones is a brilliant series of books that combines intrigue, fantasy, and deep character development. The world-building is phenomenal.'),
(6, 'A Tale of Love and Sacrifice', 'Grace Davis', 4, 'All for Love is a poignant story about sacrifice and devotion. The prose is beautiful, but the story can be a bit melodramatic at times.'),
(7, 'A Wonderful Story of Courage', 'Liam Evans', 4, 'The Boy Without a Name is a moving and uplifting story that encourages readers to believe in themselves and follow their dreams.'),
(8, 'A Beautiful Lesson in Self-Awareness', 'Olivia Harris', 5, 'The Lion Who Saw Himself in the Water is a beautifully written fable that teaches children about self-awareness and inner strength in a simple yet profound way.'),
(9, 'An Allegorical Masterpiece', 'John Scott', 5, 'The Man and the Fox is an excellent allegory that explores the complexities of human nature and relationships in a way that is both thought-provoking and entertaining.');
