import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";
import Carta from "./pages/Carta";
import NuestrosRestaurantes from "./pages/NuestrosRestaurantes";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Especialidades from "./pages/Especialidades";
import Menus from "./pages/Menus";
import Reservas from "./pages/Reservas";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/carta",
    element: <Carta></Carta>,
  },
  {
    path: "/nuestrosrestaurantes",
    element: <NuestrosRestaurantes></NuestrosRestaurantes>,
  },
  {
    path: "/especialidades",
    element: <Especialidades></Especialidades>,
  },
  {
    path: "/menus",
    element: <Menus></Menus>,
  },
  {
    path: "/reservas",
    element: <Reservas></Reservas>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
