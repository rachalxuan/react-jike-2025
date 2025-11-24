import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { createBrowserRouter } from "react-router-dom";
import { AuthRoute } from "@/components/AuthRoute";
import Home from "@/pages/Home";
import Article from "@/pages/Article";
import Publish from "@/pages/Publish";

const router = createBrowserRouter([
  {
    path: '/',
    // 当用户访问根路径 / 时，React Router 不会直接渲染 Layout，而是先渲染 AuthRoute
    element: <AuthRoute><Layout /></AuthRoute>,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'publish',
        element: <Publish />
      }
    ]

  },
  {
    path: '/login',
    element: <Login />
  }
])
export default router;