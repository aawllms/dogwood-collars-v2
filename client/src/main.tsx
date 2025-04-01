import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";
// import Cart from "./pages/CartProducts.js";
// import Products from "./pages/ProductPage.js";
// import ContactUs from "./pages/ContactUs.js";
// import Review from "./pages/Review.js";
// import SADashboard from "./pages/SADashboard.js";
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
        index: true,
        path: "/home",
        element: <Home />,
      },
    //   {
    //     path: "/cart",
    //     element: <Cart />,
    //   },

    //   {
    //     path: "/products",
    //     element: <Products />,
    //   },
    //   {
    //     path: "/contact-us",
    //     element: <ContactUs />,
    //   },
    //   {
    //     path: "/review",
    //     element: <Review />,
    //   },
    //   {
    //     path: "/sa-dashboard",
    //     element: <SADashboard />,
    //   },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
