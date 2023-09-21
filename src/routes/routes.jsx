import { createBrowserRouter } from "react-router-dom";
import App from "../App"; 
import About from "../pages/About"; 
import BlogPage from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AllUserSingleBlog from "../pages/SingleBlog";
import Compliance from "../pages/Compliance";
import PrivacyAndPolicy from "../pages/PrivacyAndPolicy";
import Price from "../pages/Price";


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
        path: "/pricing",
        element: <Price />,
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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
