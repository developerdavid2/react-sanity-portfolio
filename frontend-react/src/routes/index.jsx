import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import App from "../App.jsx";
import HomePage from "../pages/HomePage.jsx";
import ProjectDetailsPage from "../pages/ProjectDetailsPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
      </>
    ),
    children: [
      {
        index: true, // For the homepage
        element: <HomePage />,
      },
      {
        path: "details",
        element: <ProjectDetailsPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
