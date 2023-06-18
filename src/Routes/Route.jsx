import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/allToys",
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: "/toy/:id",
          element: <ViewDetails></ViewDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`) 
        },
        {
          path:"/addAToy",
          element: <AddAToy></AddAToy>
        },
        {
          path:"/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;