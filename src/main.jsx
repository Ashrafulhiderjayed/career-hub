import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
// import Header from './Components/Header/Header';
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';
import FeaturedJobsViewAll from './Components/FeaturedJobsViewAll/FeaturedJobsViewAll';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import fetchData from '../utilities/jobDetaiLoad';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch('featuredJobs.json'),
        loader: async () => {
          const response = await fetch('/featuredJobs.json');
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
        path: "/:id",
        element: <FeaturedJobsViewAll />,
        loader: ({params}) => fetch('/featuredJobs.json'),
      },
      // {
      //   path: "/:id",
      //   element: <FeaturedJobsViewAll />,
      //   loader: ({params}) => fetch(`featuredJobs.json/${params.id}`),
      // },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
        loader: () => fetchData
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
