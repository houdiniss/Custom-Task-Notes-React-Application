import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';

import App from './App';
import Posts from './routes/Posts.jsx';
import NewPost , { action as NewPostAction } from './routes/NewPost.jsx';
import ErrorPage from './components/Error.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Posts />,
        children: [
          {
            path: 'create-post',
            element: <NewPost />,
            action: NewPostAction
          }
        ]
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
