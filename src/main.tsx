import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/**
*  component routes
**/
import Index from './pages/Index';
import Product from './pages/Product';
import Profile from './pages/Account';
import Root from './pages/Root';
import SearchResult from './pages/SearchResult';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './ErrorPage';
import Checkout from '~pages/Checkout';
import Cart from '~pages/Cart';

/**
*  component loaders
**/
import { 
  manyProductsLoader, 
  singleProductLoader 
} from '~front_api/loaders/loaders';

/**
 * component actions
 * 
**/ 

//

// create the routes for the app components 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      //loader={localStorageLoader}
      //action={rootAction}
      errorElement={<ErrorPage />}
    >
        <Route 
          index 
          element={<Index />}
          loader={manyProductsLoader}
        />
        <Route
          path="/search/*"
          element={<SearchResult />}
          //loader={postLoader}
        />
        <Route
          path="/products/:id"
          element={<Product />}
          loader={singleProductLoader}
          //action={postAction}
        />
        <Route
          path="/profile"
          element={<Profile />}
          //loader={profileLoader}
        />
        <Route
          path="/checkout"
          element={<Checkout />}
          //loader={LoginLoader}
        />
        <Route
          path="/sign-in"
          element={<Login />}
        />
        <Route
          path="/sign-up"
          element={<Register />}
        />
        <Route 
          path='/cart' 
          element={<Cart />} 
          //loader={cartItemLoader}  
        />
      
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)