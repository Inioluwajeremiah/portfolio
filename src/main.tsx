import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    children: [
      {
        path: "/portfolio",
        index: true,
        element: <Home />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
