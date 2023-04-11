import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
// import Header from './Components/Header/Header';
import JobCatagory from './Components/JobCatagory/JobCatagory';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Statistics />,
        // loader: () => fetch('featuredJobs.json'),
        loader: async () => {
          const response = await fetch('/public/featuredJobs.json');
          const data = await response.json();
          return {data};
        },
      },
      {
        path: "/",
        element: <FeaturedJobs />,
        // loader: async () => {
        //   const response = await fetch('featuredJobs.json');
        //   const data = await response.json();
        //   return {data};
        // },
      },
      {
        path: "/statistics",
        element: <JobCatagory />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
)
