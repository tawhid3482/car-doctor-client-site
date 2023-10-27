import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../MainLayout/MainlayOut";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import SingUp from "../Pages/SingUp/SingUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Booking from "../Pages/Booking/Booking";
import PrivateRoutes from "../AuthProvider/PrivateRoutes/PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut></MainlayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/checkout/:id",
        element:<PrivateRoutes> <CheckOut></CheckOut></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <Booking></Booking>,
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default Routes;
