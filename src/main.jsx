import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import BookDetails from './Components/BookDetails/BookDetails';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import Features from './Components/Features/Features';
import NewPublished from './Components/NewPublished/NewPublished';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/books/:BookId', // Dynamic segment for book details
        element: <BookDetails></BookDetails>,
        loader : ()=>fetch('/Data.json')
      
        
      },
      {
        path : '/Pages-to-Read',
        element : <PagesToRead></PagesToRead>,
        loader : ()=>fetch('/Data.json')

      },
      {
        path : '/Features',
        element : <Features></Features>
      },
      // {
      //   path : '/NewPublished',
      //   element : <NewPublished></NewPublished>
      // },
      {
        path :'/ListedBooks',
        element : <ListedBooks></ListedBooks>,
        loader : ()=>fetch('/Data.json')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
