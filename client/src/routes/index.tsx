// Libs
import { createBrowserRouter } from "react-router-dom";

// Layouts
import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import MainLayout from '../layouts/MainLayout/MainLayout';
import CreateDocsPage from "../pages/admin/CreateDocsPage/CreateDocsPage";

// Pages
import HomePage from '../pages/main/HomePage/HomePage';
import { DocsPage, DocsViewPage, DocsEditPage } from "../app/modules/docs";
import { RegisterPage } from "../app/modules/auth";

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/docs", element: <DocsPage /> },
            { path: "/docs/view/:id", element: <DocsViewPage /> },
            { path: "/docs/edit/:id", element: <DocsEditPage /> },
            { path: "/register", element: <RegisterPage /> }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { path: "/admin/docs/create", element: <CreateDocsPage /> }
        ]
    }
]);

const routesMap = {
    DOCS_PAGE: "/docs",
    DOCS_VIEW_PAGE: (id: string) => `/docs/view/${id}`,
    DOCS_EDIT_PAGE: (id: string) => `/docs/edit/${id}`,
    ADMIN_DOCS_CREATE_PAGE: "/admin/docs/create"
};

const endpointsMap = {
    DOCS_ALL: "/docs/all",
    DOCS_CREATE: "/docs/create",
    DOCS_GET_BY_ID: (id: string) => `/docs/read/${id}`,
    DOCS_EDIT_BY_ID: (id: string) => `/docs/edit/${id}`,
};

export {
    routerInstance,
    routesMap,
    endpointsMap
};