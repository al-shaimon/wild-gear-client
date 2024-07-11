import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.tsx';
import { Toaster } from 'sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <div className="max-w-screen-2xl mx-auto"> */}
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
