import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import App from "../App";

const router = createBrowserRouter([
    {
        // Root path
        path:"/Module-8-Assessment-1",
        element: <App/>,

        // outlet
        children: [
            {
                path: "/Module-8-Assessment-1/registration",
                element: <Register />,
            },
            {
                path: "/Module-8-Assessment-1/login",
                element: <Login/>
            }
        ]
    }
]);

export default router;