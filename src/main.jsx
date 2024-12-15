import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./pages/Error";
import MainLayout from "./MainLayout/MainLayout";
import Register from "./pages/Auth/Reginster/Register";
import AuthProvider from "./Provider/AuthProvider";
import SignIn from "./pages/Auth/Login/SignIn.";
import Home from "./pages/Home/Home";
import JobDetails from "./pages/JobDetails/JobDetails";
import PrivateRoute from "./Private/PrivateRoute";
import JobApply from "./pages/JobApply/JobApply";
import MySubmission from "./pages/MySubmission/MySubmission";
import AddJob from "./pages/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/job/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      {
        path: "/job/:id/apply",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-submission",
        element: (
          <PrivateRoute>
            <MySubmission />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
