import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { routerInstance } from "./router";
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <RouterProvider router={routerInstance} />
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
