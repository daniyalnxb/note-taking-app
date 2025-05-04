import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import ErrorBoundry from '@/ErrorBoundry';
import { Route, Routes } from 'react-router-dom';

import { ThemeContext } from '@/context/ThemeProvider';
import Login from '@/pages/auth/Login';
import SignUp from '@/pages/auth/Signup';
import ForgotPassword from '@/pages/auth/ForgotPassword';
import ResetPassword from '@/pages/auth/ResetPassword';
import DashboardLayout from '@/layouts/dashboardLayout/DashboardLayout';

function App() {
  const { darkTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkTheme ? "dark" : "light"
    );
  }, [darkTheme]);

  return (
    <>
      <ToastContainer
        position="top-right"
        style={{ zIndex: '100000000' }}
        hideProgressBar
        newestOnTop
        draggable
      />
      <ErrorBoundry>
        <Routes>
          <Route path='/' element={<DashboardLayout />}>
            <Route index element={<h1>All notes</h1>} />
            <Route path='archived' element={<h1>Archived notes</h1>} />
            <Route path='/:tagName/:tagId' element={<h1>Tag</h1>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
        </Routes>
      </ErrorBoundry>
    </>
  )
}

export default App;
