# Articles Explorer

This React application displays a list of NY Times Most Popular articles and allows users to view detailed information about each article.

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Es6+ Syntax | Custom Hooks | Functional components | Unit Testing(Jest) | End to End Testing(Cypress) | Eslint | Prettier | Container-Presentation pattern | API Call | Coverage Report

# Features

Article List: Displays a list of articles fetched from an API.

Article Details: Provides detailed information about each article when clicked.

# Installation

To run this project locally, follow these steps:

1. Clone the repository:

https://github.com/poonam-stack/articles-explorer.git

2. Navigate into the project directory:

cd articles-explorer

3. Install dependencies:

npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm test:coverage`

Generates the coverage report.\

### `npm lint`

Runs the es-lint rules on the code.\

### `npm lint:fix`

Fixes the issues that can be fixed.\

### `npm format`

Formats JavaScript files according to the rules specified in .prettierrc\

### `npm format:fix`

Fixes prettier issues that can be fixed.\

### `npm run build`

Builds the app for production to the `build` folder.\

## Architecture

### Container-Presentation Pattern

This project follows a Container-Presentation pattern for component organization.

Containers: Responsible for fetching data and passing it to presentational components.
- ArticlesContainer

Presentation Components: Receive data via props and handle UI rendering.
- ArticleList
- ArticleDetails

## Benefits

Separation of Concerns: Container components handle data and state management, while presentational components focus on UI rendering and interaction.

Reusability: Presentational components (ArticleList, ArticleDetails) can be reused in different contexts or screens.

Scalability: Easy to extend and maintain as the application grows.






