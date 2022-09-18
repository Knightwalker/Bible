// Libs
import { createBrowserRouter } from "react-router-dom";

// Layouts
import AdminLayout from "./layouts/AdminLayout/AdminLayout";
import MainLayout from './layouts/MainLayout/MainLayout';
import CreateDocsPage from "./pages/admin/CreateDocsPage/CreateDocsPage";

// Pages
import HomePage from './pages/HomePage/HomePage';
import DocViewPage from "./pages/docs/DocViewPage/DocViewPage";
import DocEditPage from "./pages/docs/DocEditPage/DocEditPage";

const routerInstance = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/docs/view/:id", element: <DocViewPage /> },
            { path: "/docs/edit/:id", element: <DocEditPage /> }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { path: "docs", element: <div>Some docs</div> },
            { path: "docs/create", element: <CreateDocsPage /> }
        ]
    }
]);

const routesMap = {
    DOCS_VIEW_PAGE: (id) => `/docs/view/${id}`,
    DOCS_EDIT_PAGE: (id) => `/docs/edit/${id}`,
    ADMIN_DOCS_CREATE_PAGE: "admin/docs/create"
};

const endpointsMap = {
    DOCS_ALL: "/docs/all",
    DOCS_GET_BY_ID: (id) => `/docs/read/${id}`,
    DOCS_EDIT_BY_ID: (id) => `/docs/edit/${id}`,
    CREATE_DOC: "/docs/create"
};

export {
    routerInstance,
    routesMap,
    endpointsMap
};