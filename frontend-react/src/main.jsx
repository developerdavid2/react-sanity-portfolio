import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/index.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
