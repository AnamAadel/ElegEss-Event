import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";
import AuthProvider from './components/context/AuthContext';
import EventContext from './components/context/EventContext';
import './index.css';
import router from './router/routes.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <EventContext>

      <RouterProvider router={router} />
    </EventContext>

  </AuthProvider>
  </React.StrictMode>,
)
