import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';

import Root from './Root.jsx';
import Posts from './routes/Posts.jsx';
import NewPost , { action as NewPostAction } from './routes/NewPost.jsx';
import ErrorPage from './components/Error.jsx';
import EditPost , { action as EditPostAction } from './routes/EditPost.jsx';
import DeletePost from './routes/DeletePost.jsx';
import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Posts />,
        children: [
          {
            path: 'create-post',
            element: <NewPost />,
            action: NewPostAction
          },
          {
            path: ':postId/edit',
            element: <EditPost />,
            action: EditPostAction
          },
          {
            path: ':postId/delete',
            element: <DeletePost />,
          },
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
