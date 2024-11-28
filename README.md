# BookTalk

This application allows users to create, view, update, and delete book reviews. It's built with a React frontend and an Express.js backend, using Axios for API calls and managing state with React hooks. The backend connects to a MySQL database running inside a Docker container.

  # Project Structure

  Frontend:
  
        Framework: React.js
        Components:
            ReviewForm.js: Handles adding and editing reviews.
            ReviewList.js: Displays a list of reviews.
            Review.js: Represents a single review.
        Services:
            api.js: Contains Axios configurations and functions for API calls.    


Backend

        Framework: Express.js
        Routes: /api/reviews: Endpoint for creating, retrieving, updating, and deleting reviews.
        Database: MySQL (Running in Docker)



# Setup Instructions
Prerequisites

Ensure you have the following installed on your machine:

Node.js (v14+)
npm (Node Package Manager)
Docker and Docker Compose

1. Clone the Repository
   
        git clone https://github.com/yourusername/..
        cd book-review-app
   
3. MySQL Database Setup with Docker
   
Navigate to the server directory:


        cd server
        Create a docker-compose.yml file with the following content:


                version: '3.8'
                
                services:
                  db:
                    image: mysql:8.0
                    container_name: book_review_db
                    restart: always
                    environment:
                      MYSQL_ROOT_PASSWORD: your_root_password
                      MYSQL_DATABASE: book_reviews
                      MYSQL_USER: user
                      MYSQL_PASSWORD: user_password
                    ports:
                      - "3306:3306"
                    volumes:
                      - db_data:/var/lib/mysql
                
                volumes:
                  db_data:

                  
Start the MySQL container:

        docker-compose up -d
This will start the MySQL database in the background. The database will be accessible at localhost:3306.

Stop the MySQL container (if needed):

        docker-compose down

        
3. Backend Setup
   
Install dependencies:

        npm install
        
Create a .env file in the server directory:

        PORT=5000
        DB_HOST=localhost
        DB_USER=user
        DB_PASSWORD=user_password
        DB_NAME=book_reviews
        
Start the backend server:

        npm start
The server will run at http://localhost:5000.

4. Frontend Setup
Navigate to the client directory:


Install dependencies:

    npm install
    
Start the frontend development server:

    npm start
The application will run at http://localhost:3000.




# Features Implemented
Create Reviews: Users can add new book reviews through a form.

View Reviews: All reviews are displayed in a list with details.

Edit Reviews: Existing reviews can be edited from the list.

Delete Reviews: Users can remove reviews.

Error Handling: Basic error messages are displayed for API errors or invalid input.

CORS Configuration: The backend is configured to allow requests from the frontend's origin.
