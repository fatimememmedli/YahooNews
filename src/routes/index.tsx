import Home from "../pages/user/home/index";
import { RouteObject } from "react-router-dom";
import Login from "../pages/login/Login";
import Register from "../pages/Register/Register";
import Politics from "../pages/politics/Politics";
import Health from "../pages/health/Health";
import Science from "../pages/science/Science";
import World from "../pages/world/World";
import Admin from "../pages/admin/Admin";
import CreateNews from "../pages/admin/CreateNews";
import Edit from "../pages/admin/Edit";
const routes: RouteObject = [
  {
    path: "/",
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/politics",
        element: <Politics />,
      },
      {
        path: "/health",
        element: <Health />,
      },
      {
        path: "/science",
        element: <Science />,
      },
      {
        path: "/world",
        element: <World />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/admin/createNews",
        element: <CreateNews />,
      },
      {
        path: "/admin/edit",
        element: <Edit />,
      },
    ],
  },
];
export default routes;
