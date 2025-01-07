import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './pages/CartContext'; 
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';  
import ROUTES from './route/router';  

const routes = createBrowserRouter([...ROUTES]);

function App() {
  return (
    <CartProvider>  
      <ToastContainer position="top-right" 
      autoClose={4000} 
      hideProgressBar={false}
      closeOnClick={true}
      rtl={false}
      theme='dark' />
      <RouterProvider router={routes} />
    </CartProvider>
  );
}

export default App;
