import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error";
import Projects from "./routes/projects";
import Home from "./routes/home";
import Playground from "./routes/projects/playground";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/playground/:id",
        element: <Playground />,
      },
    ],
  },
]);

document.title = "ReactCraft || Website Builder";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
