// Libs
import { createBrowserRouter } from "react-router-dom";

// Layouts
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import MainLayout from './layouts/MainLayout/MainLayout';
import CreateDocsPage from "./pages/admin/CreateDocsPage/CreateDocsPage";

// Pages
import HomePage from './pages/HomePage/HomePage';

const routesMap = {
    ADMIN_DOCS_CREATE: "admin/docs/create"
}

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "docs",
                element: <div>Some docs</div>,
            },
            {
                path: "docs/create",
                element: <CreateDocsPage />,
            }
        ]
    }
]);

export { 
    routesMap, 
    routerInstance 
};