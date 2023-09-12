import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layouts/AdminLayout";
import About from "../pages/About";
import AllBlogs from "../pages/Admin/AllBlogs";
import Auth from "../pages/Admin/Auth";
import BlogPage from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllUserSingleBlog from "../pages/SingleBlog";
import Compliance from "../pages/Compliance";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";


//new dynamic routing system of React
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/compliance",
        element: <Compliance />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyAndPolicy />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      }, 
      {
        path: "/blog/:id",
        element: <AllUserSingleBlog />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        path: "/admin",
        element: <AllBlogs />,
      },
    ],
  },  
  {
    path: "/admin/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
