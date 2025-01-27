import {createBrowserRouter} from "react-router-dom";
import Auth from "./auth/Auth";
import Register from "./auth/Register";
import Home from "./home/Home";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Auth/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: '/',
        element: <Home/>
    }
])

export default router