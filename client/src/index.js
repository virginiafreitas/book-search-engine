import React from 'react';
import ReactDOM from 'react-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import './index.css';
// import SearchBooks from './pages/SearchBooks'
// import SavedBooks from './pages/SavedBooks'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <h1 className='display-2'>Wrong page!</h1>,
//     children: [
//       {
//         index: true,
//         element: <SearchBooks />
//       }, {
//         path: '/saved',
//         element: <SavedBooks />
//       }
//     ]
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

ReactDOM.render(
  <React.StrictMode>,
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);