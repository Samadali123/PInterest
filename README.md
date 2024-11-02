# visionBoard web app 

This project is a web application similar to Pinterest, built using Node.js, Express.js, MongoDB, EJS for templating, Tailwind CSS for styling, and Passport.js for authentication. It includes features for user registration, authentication, creating boards, saving pins, following boards/users, liking pins, exploring content, searching pins/users, editing profiles, commenting on pins, and saving/unsaving pins.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Routes](#routes)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo
There is no live demo available for this project.

## Features
- User registration and authentication
- Create and manage boards
- Save and manage pins on boards
- Follow boards and users
- Like pins
- Explore pins and boards
- Search pins and users
- Edit user profile
- Follow/unfollow users
- Comment on pins
- Save/unsave pins

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [EJS](https://ejs.co/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Passport.js](http://www.passportjs.org/)

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/pinterest-like-app.git
    cd pinterest-like-app
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    SESSION_SECRET=your_session_secret
    ```

4. Run the development server:
    ```bash
    npm start
    ```

5. The server will be running at `http://localhost:5000`.

## Usage
- **User Registration**: Sign up for a new account.
- **User Login**: Log in with your registered credentials.
- **Create Boards**: Create new boards to organize pins.
- **Save Pins**: Save images or content to boards.
- **Follow Boards/Users**: Follow boards or users to see their updates.
- **Like Pins**: Like pins to save them or show appreciation.
- **Explore Content**: Discover new pins and boards through the explore feature.
- **Search Pins**: Search for specific pins by keywords.
- **Search Users**: Search for users by username or name.
- **Edit Profile**: Update user profile details.
- **Follow/Unfollow Users**: Follow or unfollow other users.
- **Comment on Pins**: Add comments to pins.
- **Save/Unsave Pins**: Save or unsave pins for later viewing.

## Project Structure
