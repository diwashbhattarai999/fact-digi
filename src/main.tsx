import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import { router } from '@/app/routes/router';

import './styles/index.css';
import './styles/tailwind.css';

const rootElement = document.getElementById('root')!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
