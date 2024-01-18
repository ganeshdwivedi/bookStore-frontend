import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Books from './pages/Books.jsx';
import Login from './pages/Login.jsx';
import BookReviewCard from './components/BookReviewCard.jsx';
import BookUpdate from './components/BookUpdate.jsx';
import BookDelete from './components/BookDelete.jsx';
import BooksCreate from './components/BooksCreate.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="books" element={<Books />} />
      <Route path="/books/create" element={<BooksCreate />} />
      <Route path="/books/:id" element={<BookReviewCard />} />
      <Route path="/books/update/:id" element={<BookUpdate />} />
      <Route path="/books/delete/:id" element={<BookDelete />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
