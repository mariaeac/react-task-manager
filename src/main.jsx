import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactDOM from "react-dom/client";

import { BrowserRouter, createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import TaskDetails from "./components/TaskDetails.jsx";

// const root = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task-details",
    element: <TaskDetails />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </StrictMode>
);
