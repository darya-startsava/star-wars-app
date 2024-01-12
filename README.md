# Star Wars App

## ⚠ Prerequisites

- You have Node.js LTS installed.

## 🚀 Getting Started

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the app.
4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Technology Stack

The project is written in JavaScript and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The following libraries are used:

- [React](https://reactjs.org/) used for building the UI.
- [Redux Toolkit](https://redux-toolkit.js.org/) used for state management and data fetching.
- [React Router](https://reactrouter.com/) used for client side routing.
- [Material UI](https://material-ui.com/) used for UI components. MUI is used to speed up development and provide a consistent look and feel.
- [@emotion](https://emotion.sh/docs/introduction) used with MUI for styling components.

## Architecture Decisions Records
- There were no requirements for implementing the project in TypeScript, so JavaScript was used to speed up development. It can be easily rewritten using TypeScript if needed.
- MUI was chosen for UI components because of its popularity and ease of use. There were no requirements for using a specific UI library.
- Filtering functionality was implemented on the client side because the API does not support filtering by specific fields.
