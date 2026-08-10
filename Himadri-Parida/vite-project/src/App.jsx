import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import MatchPage from "./pages/MatchPage";
import LoginPage from "./component/LoginPage";

import BookingPage from "./pages/BookingPage";
import SuccessPage from "./pages/SuccessPage";
import MovieBookingPage from "./pages/MovieBookingPage";
import EventBookingPage from "./pages/EventBookingPage";
import BookingProvider from "./context/BookingContext";
import Ref from "./component/Ref";
import Memoization from "./component/Memoization";
import AxiosDemo from "./component/AxiosDemo";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path:'/',
        element:
        <div>
          <MatchPage/>
        </div>
      },
     
      {
        path:'/bookings',
        element:<BookingPage/>
      },
      {
        path:'/success',
        element:<SuccessPage/>
      },
      {
        path:'/movies',
        element:<MovieBookingPage/>
      },
      {
        path:'/Events',
        element:<EventBookingPage/>
      },
      {
        path:'/reference',
        element:<Ref/>
      },
      {
        path:'/memo',
        element:<Memoization/>
      },
      {
        path:'/axios-demo',
        element:<AxiosDemo/>
      }
    ]
  );
  return (
    <BookingProvider>
      <RouterProvider router={router} />
    </BookingProvider>
  );
};

export default App;