import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      {
        path: "/applied",
        Component: AppliedJobs,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/job/:id",
        Component: JobDetails,
        loader: () => fetch("../jobs.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
