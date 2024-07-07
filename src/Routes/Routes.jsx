import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BookingPage from "../pages/BookingPage";
import Packages from "../pages/Packages";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <NotFound/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
            path: "/package/:id",
            element: <BookingPage /> ,
        },
        {
            path: "/packages",
            element: <Packages /> ,
        },
        {
            path: "/login",
            element: <Login /> ,
        },
        {
            path: "/signup",
            element: <SignUp /> ,
        },
        
        
      ],
    },
    {
    //   path: "dashboard",
    //   element: <Dashboard />,
    //   children: [
        
    //     {
    //       path: "reservations",
    //       element: <AllBookings />,
    //     },
        
    //   ],
    },
  ]);