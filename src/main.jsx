import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./AllRoutes/Routes.jsx";
import AuthProvider from "./AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Routes} />
      </AuthProvider>
    </React.StrictMode>
    ,
  </div>
);
