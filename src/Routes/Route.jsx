import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AddAToy from "../pages/AddAToy/AddAToy";
import AllToys from "../pages/AllToys/AllToys";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdatedInfo from "../pages/UpdateInfo/UpdatedInfo";
import TabView from "../pages/TabView/TabView";


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
          path: "/tabsView/:id",
          element: <TabView></TabView>,
          loader: ({params}) => fetch(`http://localhost:5000/tabs/${params.id}`)
        },
        {
          path: "/allToys",
          element: <AllToys></AllToys>,
          loader: () => fetch('http://localhost:5000/toys')
        },
        {
          path: "/toy/:id",
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`) 
        },
        {
          path:"/addAToy",
          element: <AddAToy></AddAToy>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/myToys",
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: "/update/:id",
          element: <UpdatedInfo></UpdatedInfo>,
          loader: ({params}) => fetch(`http://localhost:5000/toys/myToys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;