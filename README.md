## Project Overview

The project implements a simple web application for managing and displaying data. It includes the following main features:

- **Data Fetching:** Data is fetched from an API using Axios and React Query. The fetched data is displayed in a tabular format.

- **Data Addition:** Users can add new data entries through a form. Form validation is implemented using React Hook Form and Zod for schema validation.

- **Data Deletion:** Entries can be deleted using a delete button in each row. Immer is used to handle state updates in an immutable way.

- **Data Filtering:** A search bar is provided to filter the displayed data based on a user-entered query.

## Libraries Used

- **React:** Used as the core framework for building the user interface.

- **React Query:** Employed for data fetching, caching, and managing asynchronous data. It improves data loading performance and provides a consistent data fetching API.

- **Axios:** Used to make HTTP requests to an external API for fetching data.

- **React Hook Form:** Utilized for building forms with efficient form state management and validation capabilities.

- **Zod:** Used for schema-based form validation, ensuring data consistency before submission.

- **Immer:** Employed for immutability when updating state, simplifying state manipulation.

- **Tailwind CSS:** Utilized for styling the user interface, providing responsive and customizable design components.

## Project Structure

- `src/components`: Contains various React components for different parts of the application, such as form, data table, search, etc.

- `src/entities`: Includes TypeScript type definitions for data structures used in the application.

- `src/hooks`: Contains custom hooks, such as the `useData` hook for fetching data using React Query.

- `src`: Main application code, including the `Layout` component which serves as the entry point for the application.

## Getting Started

1. Clone the repository to your local machine.
2. Install dependencies using ```npm install```.
3. Start the development server using ```npm run dev```.
4. Access the application at ```http://localhost:3000```.

Feel free to explore and modify the code according to your needs. Happy coding!

---
