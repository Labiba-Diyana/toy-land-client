import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import AddAToy from "../pages/AddAToy/AddAToy";

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
          path:"/addAToy",
          element: <AddAToy></AddAToy>
        }
      ]
    },
  ]);

  export default router;