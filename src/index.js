import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Navbar from './components/navbar';
import Home from './components/home';
import Search from './components/search';


import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';

const router= createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "Search",
    element: <Search />
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
