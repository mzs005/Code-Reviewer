 Code Reviewer MERN Stack
This project is a Code Reviewer application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application allows users to input code snippets and receive detailed reviews and suggestions for improvement. The backend leverages Google Generative AI to analyze the code and provide feedback, while the frontend provides an intuitive interface for users to interact with the system.

The project is divided into two main parts:

Frontend: A React-based user interface that allows users to input code, submit it for review, and display the AI-generated feedback.
Backend: An Express.js server that handles API requests, processes the code using Google Generative AI, and returns the review to the frontend.
Project Structure
Frontend
The frontend is located in the Frontend directory and is built using React.js with Vite as the build tool. It includes the following key files:

index.html: The entry point of the React application.
src/main.jsx: The main file that renders the React application into the DOM.
src/App.jsx: The core component of the application. It contains:
A code editor for users to input their code.
A button to submit the code for review.
A section to display the AI-generated review.
src/App.css: The CSS file for styling the application, including layout and design for the editor and review sections.
Backend
The backend is located in the Backend directory and is built using Node.js with Express.js. It includes the following key files:

Server.js: The entry point of the backend server. It:
Loads environment variables using dotenv.
Imports and starts the Express app from app.js.
Listens on port 3000.
src/app.js: The main Express application file. It:
Configures middleware for JSON parsing and CORS.
Sets up the /ai route using the ai.routes.js file.
src/routes/ai.routes.js: Defines the API routes for the application. It:
Exposes a POST route /ai/get-review that triggers the getReview function in the controller.
src/controllers/ai.controller.js: Contains the logic for handling API requests. It:
Validates the incoming request to ensure the code field is present.
Calls the AI service to process the code and sends the response back to the client.
src/services/ai.services.js: Implements the integration with Google Generative AI. It:
Configures the AI model using the GOOGLE_GEMNI_KEY from the .env file.
Defines a function generateContent that sends the code to the AI model and retrieves the review.
Routes and Their Functions
Frontend
The frontend does not define explicit routes but interacts with the backend via API calls. The key interaction is:

POST /ai/get-review: Sends the code snippet to the backend for review and displays the response.
Backend
The backend defines the following routes:

POST /ai/get-review:
File: ai.routes.js
Controller: getReview
Service: generateContent
Description: Accepts a code snippet in the request body, processes it using Google Generative AI, and returns the AI-generated review.
Key Functionalities
Frontend:

A code editor implemented using react-simple-code-editor with syntax highlighting provided by prismjs.
A "Review" button that triggers the backend API call.
A markdown renderer (react-markdown with rehype-highlight) to display the AI-generated review.
Backend:

Middleware for JSON parsing and CORS.
Integration with Google Generative AI to analyze and review code.
A well-structured API with separate files for routes, controllers, and services.
Summary of Files and Their Responsibilities
Frontend
index.html: Entry point for the React app.
src/main.jsx: Renders the React app.
src/App.jsx: Core component for the code editor and review display.
src/App.css: Styles for the application.
Backend
Server.js: Starts the Express server.
src/app.js: Configures middleware and routes.
src/routes/ai.routes.js: Defines the /ai/get-review route.
src/controllers/ai.controller.js: Handles the logic for processing API requests.
src/services/ai.services.js: Integrates with Google Generative AI to generate code reviews.
This project demonstrates a clean separation of concerns and effective use of modern web development tools and libraries.
