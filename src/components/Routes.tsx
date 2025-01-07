import {createBrowserRouter} from "react-router-dom";
import Auth from "./auth/Auth";
import Register from "./auth/Register";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Auth/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default router