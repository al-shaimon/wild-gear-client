import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home/Home';
import Products from '../pages/Products/Products/Products';
import SingleProduct from '../pages/Products/SingleProduct/SingleProduct';
import ProductManagement from '../pages/Products/ProductManagement/ProductManagement';
import About from '../pages/About/About/About';
import Cart from '../pages/Cart/Cart/Cart';
import Checkout from '@/pages/Cart/Checkout/Checkout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
      },
      {
        path: '/manage-products',
        element: <ProductManagement />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
]);
