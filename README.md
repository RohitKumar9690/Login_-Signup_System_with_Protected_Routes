# User Authentication System with Login, Signup & Protected Routes

A secure and scalable user authentication system built with **React**, **Redux Toolkit**, **Tailwind CSS** for the frontend, and **Node.js** with **Express** for the backend. This project includes login and signup pages, user authorization, and protected routes to ensure secure access control for authenticated users only.

## Screenshot
![image](https://github.com/user-attachments/assets/7628219f-7d24-4df1-a776-018a78e59ba1)
![image](https://github.com/user-attachments/assets/55c13912-6d46-4df2-944c-68367d1deafc)
![image](https://github.com/user-attachments/assets/44e3b5e3-bc6e-4c7a-8464-95ee798438f6)



## Technologies Used

### Frontend:
- **React**: JavaScript library for building user interfaces.
- **React-DOM**: Provides DOM-specific methods that allow React to interact with the web browser.
- **Redux Toolkit**: State management library for handling authentication and session data.
- **Tailwind CSS**: Utility-first CSS framework for creating a responsive and modern user interface.

### Backend:
- **Node.js**: JavaScript runtime environment for building the server-side application.
- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: NoSQL database used for storing user data.
- **Mongoose**: ODM for MongoDB and Node.js, used to model user data and interact with the database.
- **JWT (JSON Web Token)**: For securely transmitting information between the frontend and backend.
- **bcryptjs**: For hashing and securing user passwords.
- **Cookie-parser**: Middleware for parsing cookies.
- **CORS**: To handle cross-origin resource sharing issues.
- **dotenv**: For managing environment variables securely.

## Key Features

- **User Authentication**: Secure login and signup functionality with form validation and error handling.
- **Protected Routes**: Implemented route protection to restrict access to certain pages based on user authentication status.
- **Redux Toolkit**: Efficient state management for handling user authentication and session information on the frontend.
- **Responsive Design**: A mobile-first approach using **Tailwind CSS**, ensuring a seamless experience on all devices.
- **Authorization & Session Management**: Securely manage user sessions with **JWT** to ensure only authorized users can access restricted content.
- **Modern UI**: A clean and intuitive user interface with a focus on usability and design.
- **Backend Security**: Password hashing with **bcryptjs**, token-based authentication with **JWT**, and secure session management.

## Project Structure

### Frontend (Client):
- **`src/`**: Contains React components, Redux slices, and utility files.
  - This is where all the React code and state management logic resides.
  - Includes components like `Login`, `Signup`, `Dashboard`, etc.
  - Redux slices handle authentication state, such as storing the current user and the authentication token.
  
- **`public/`**: Static assets like images and HTML files.
  - Contains the `index.html` file for the React application.
  - Static assets such as logos and other image files are stored here.

### Backend (Server):
- **`server.js`**: The entry point for the backend server.
  - Initializes the Express server, sets up middleware (like body parsers and CORS), and connects to the database.
  - Defines the API routes for user authentication and protected routes.
  
- **`models/`**: Mongoose models for user data.
  - Contains the user schema used by Mongoose to interact with the MongoDB database.
  - Typically includes fields like `email`, `password`, and any other data associated with the user.

- **`routes/`**: Express route handlers for authentication endpoints.
  - Defines routes for user login, signup, and authentication checks (e.g., `/login`, `/signup`, `/protected`).
  - Handles requests and passes them to the appropriate controller methods.

- **`config/`**: Contains the `.env` file and other configuration files.
  - The `.env` file stores environment variables like the MongoDB connection URL, secret JWT key, and the port for the server.
  - This folder may contain additional configuration files for connecting to services (e.g., database, external APIs).

- **`middleware/`**: Middleware for authentication, validation, etc.
  - Custom middleware functions to validate JWT tokens, check if a user is authenticated, or validate request data (e.g., ensure that the email format is correct).

---


### Key Steps in the Installation:

1. **Clone the repository** to your local machine.
2. **Install backend dependencies** by running `npm install` inside the `server` directory.
3. **Set up environment variables** by creating a `.env` file in the `server/config/` folder.
4. Create a `.env` file inside the `server/config/` folder and add the following content:

```env
PORT=
MONGO_URL=
SECRET_KEY=
CORS_URL=
5. **Install frontend dependencies** by running `npm install` inside the `frontend` directory.
6. **Start the backend server** and **frontend server** to see the app running locally.

This section provides clear instructions for anyone who wants to clone the repository and set up the project on their own machine.


