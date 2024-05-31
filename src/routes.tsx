import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./pages/GameDetailPage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {path : '/', element : <Layout />, children : [
        {index : true, element : <Homepage />},
        {path : 'games/:slug', element : <GameDetailPage />}
    ], errorElement : <ErrorPage />}
])

export default router