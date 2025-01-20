import { createBrowserRouter, RouterProvider } from "react-router";
import React from "react";

import App from "../App";
import Home from "../Home/Home";
import Shop from "../Shop/Shop"
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import DashBoard from "../dashboard/DashBoard";
import UploadBook from "../dashboard/UploadBook";
import MangaBook from "../dashboard/MangaBook";
import EditBook from "../dashboard/EditBook";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import LogOut from "../Components/LogOut";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/shop",
                element: <Shop/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`https://book-server-jfl6.onrender.com/book/${params.id}`)
            }
        ]
    },
    {
        path: "/admin/dashboard",
        element: <DashBoardLayout />,
        children: [
            {
                path: "",
                element: <PrivateRoute><DashBoard /></PrivateRoute>
            },
            {
                path: "upload",
                element: <UploadBook />
            },
            {
                path: "manage",
                element: <MangaBook />
            },
            {
                path: "edit-books/:id",
                element: <EditBook />,
                loader: ({ params }) => fetch(`https://book-server-jfl6.onrender.com/book/${params.id}`)
            }
        ]
    },
    {
        path: "sign-up",
        element: <SignUp />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "logout",
        element: <LogOut />
    }
]);

export default router;
