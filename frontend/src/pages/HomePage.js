import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import './HomePage.css'; // You can keep some global styles if needed

const books = [
  { id: 1, title: 'To Kill a Mockingbird', image: '/images/1.png' },
  { id: 2, title: 'The Psychology of Money', image: '/images/2.png' },
  { id: 3, title: 'Charlotte\'s Web', image: '/images/3.png' },
  { id: 4, title: 'I Don\'t Love You Anymore', image: '/images/4.png' },
  { id: 5, title: 'Game of Thrones', image: '/images/5.png' },
  { id: 6, title: 'All for Love', image: '/images/6.png' },
  { id: 7, title: 'The Boy Without a Name', image: '/images/7.png' },
  { id: 8, title: 'The Lion Who Saw Himself in the Water', image: '/images/8.png' },
  { id: 9, title: 'The Man and the Fox', image: '/images/9.png' }
];

const Homepage = () => (
  <Container maxWidth="lg" className="homepage-container">
    <Typography variant="h3" gutterBottom className="title">
      Welcome to the Book Review Hub
    </Typography>
    <Grid container spacing={4}>
      {books.map((book) => (
        <Grid item key={book.id} xs={12} sm={6} md={4}>
          <Card className="book-card" elevation={4}>
            <CardActionArea component={Link} to={`/books/${book.id}`}>
              <CardMedia
                component="img"
                height="650px"
                image={book.image}
                alt={book.title}
                className="book-image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {book.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Homepage;
