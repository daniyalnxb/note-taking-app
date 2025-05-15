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
          <Route path='/'>
            <Route index element={<DashboardLayout />}/>
            <Route path='/archived' element={<DashboardLayout />}/>
            <Route path='/tag/:tagName' element={<DashboardLayout />}/>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </ErrorBoundry>
    </>
  )
}

export default App;
