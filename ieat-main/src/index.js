import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inicio from "./pages/inicio";
import Docentes from "./pages/docentes";
import Aula from "./pages/aula";
import Cursos from "./pages/cursos";
import Sobre from "./pages/sobre";
import Redes from "./pages/redes";
import { AuthContextProvider } from "./contexts/useAuthContext";
import Login from "./pages/login";
import Cart from "./pages/cart";
import FormularioContato from "./pages/formularioContato";
import FormTrabalheConosco from "./pages/formTrabalheConosco";
import FormMatricula from "./pages/formMatricula";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/docentes",
        element: <Docentes />,
      },
      {
        path: "/aula",
        element: <Aula />,
      },
      {
        path: "/cursos",
        element: <Cursos />,
      },
      {
        path: "/redes",
        element: <Redes />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      }, 
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/formularioContato",
        element: <FormularioContato />,
      },
      {
        path: "/formTrabalheConosco",
        element: <FormTrabalheConosco />,
      },
      {
        path: "/formMatricula",
        element: <FormMatricula />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);