import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import App from "../App";

const router = createBrowserRouter([
    {
        // Root path
        path:"/Module-8-Assessment-1/",
        element: <App/>,

        // outlet
        children: [
            {
                path: "registration",
                element: <Register />,
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    }
]);

export default router;