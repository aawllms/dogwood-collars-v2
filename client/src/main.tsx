import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
import Cart from "./pages/CartProducts.js";
import Products from "./pages/ProductPage.js";
import ContactUs from "./pages/ContactUs.js";
import AboutUs from "./pages/AboutUs.js";
import SADashboard from "./pages/SADashboard.js";
import Home from "./pages/Home.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      // {
      //   index: true,
      //   element: <SearchResource />,
      // },
      {
        path: "/home",
        element: <Home />,
      },
        {
          path: "/cart",
          element: <Cart />,
        },

      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
        {
          path: "/contact-us",
          element: <ContactUs />,
        },
        {
          path: "/sa-dashboard",
          element: <SADashboard />,
        },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
