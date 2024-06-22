import { createBrowserRouter } from "react-router-dom";
import Main from "../components/Layout/Main";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

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
        // {
        //   path: "/events/:eventId", 
        //   element: <EventDetailsPage />,
        // },
        // {
        //   path: "/booking",
        //   element: <BookingPage/>,
        // },
        // {
        //   path: '/booking/:eventId',
        //   element: <BookingPage />,
        // },
        // {
        //   path: "/events",
        //   element: <Events/>,
        // },
        // {
        //   path: "/payment",
        //   element: <PaymentPage/>,
        // },
        // {
        //   path: "/bookedevents",
        //   element: <BookedEvents/>,
        // },
        // {
        //   path:"/login", 
        //   element: <Login/>,
        // },
        // {
        //   path:"/register", 
        //   element: <Register />,
        // },
        // {
        //   path:"/dashboard", 
        //   element: <Dashboard />,
        // },
        
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