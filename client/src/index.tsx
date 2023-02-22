import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from 'react-router-dom';
import { routerInstance } from "./routes";
import reportWebVitals from './reportWebVitals';
import './index.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity
        }
    }
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={routerInstance} />
    </QueryClientProvider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
