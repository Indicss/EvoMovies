import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { LoginForm } from './components/LoginForm/LoginForm.jsx';
import { MovieComponent } from './components/MovieComponent/MovieComponent.jsx';
import { NotFoundPage } from './components/NotFoundPage.jsx';
import { UserProfile } from './components/UserProfile/UserProfile.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/LoginForm', element: <LoginForm /> },
  { path: '/MovieComponent', element: <MovieComponent /> },
  { path: '/UserProfile', element: <UserProfile /> },
  { path: '*', element: <NotFoundPage /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
