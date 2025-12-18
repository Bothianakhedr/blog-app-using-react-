import { createBrowserRouter } from "react-router-dom";
import {
  ChangePassword,
  ForgotPassword,
  Login,
  Register,
} from "../pages/account";

import { Layout } from "../Components/Layout";
import { CreatePost, Home, PageNotFound, PostDetails, Posts } from "../pages";
import { ContactUs } from "../pages/ContactUs";
import { ProtectedRoute } from "../Components/auth/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: `post/:id`,
        element: <PostDetails />,
      },
      {
        path: "createPost",
        element: (
          <ProtectedRoute>
            <CreatePost />
          </ProtectedRoute>
        ),
      },
      { path: "allPosts", element: <Posts /> },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  { path: "forgotPassword", element: <ForgotPassword /> },
  { path: "changePassword", element: <ChangePassword /> },
  { path: "*", element: <PageNotFound /> },
]);
