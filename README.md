# React + TypeScript + Vite (no react compiler)

## Refresh journey

- 1 - React routing
  <br />
  react-router-dom installation, and child Outlet component to pass props from parent component

- 2 - Application of (_React routing_) topic
  <br />
  Added simple UI, contents, and navigations

- 3 - useContext, Context API, and creating custom hooks
  <br />
  Understanding createContext, Providers, while doing non-backend authentication

- 4 - Express.js introduction (on express branch)
  <br />
  Learn Express.js from scratch. Installed Express.js, run simplest express app, create github gist for installation. Understanding express routings

- 5 - POSTMAN
  <br />
  Used POSTMAN for testing different http methods APIs from express/src/app.ts file

- 6 - `res` and `HTTP status codes`
  <br />
  Returning a proper response from API endpoint

- 7 - Express folder structure
  <br />
  Relocate functions from `app.ts` to their respective folders

- 8 - React and Express communication
  <br />
  Allow React to fetch data from Express with CORS (Cross-Origin Resource Sharing)x

- 9 - Simulation of login form
  <br />
  Simulate mini login form using hardcoded user data from server (express)

- 10 - Working with dotenv
  <br />
  Understanding dotenv, config, dotenv architecture, and env variables compile time and runtime value

- 11 - MongoDB and Mongoose
  <br />
  Installing MongoDB and mongoose

- 12 - Refactoring from ram storage to disk storage
  <br />
  From JavaScript arrays as database to MongoDB database — dropping `const users = [...]`

- 13 - Global error handling
  <br />
  - Create an asyncHandler to avoid try/catch in every service layer — catches error in service layer.
  - Create an AppError that extends the Error object to pass error status code.
  - Create an errorHandler to throw an error Response to the frontend.
