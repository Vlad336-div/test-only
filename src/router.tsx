import React, {useMemo} from 'react';
import {Routes, Route, useLocation, Navigate} from "react-router-dom"
import Login from "./pages/login/Login"
import Profile from "./pages/profile/Profile"

const Router = (): JSX.Element => {
  const location = useLocation()

  const auth = useMemo(() => {
    return JSON.parse(localStorage.getItem('auth')!)
  }, [location])

  const remember = useMemo(() => {
    return JSON.parse(localStorage.getItem('remember')!)
  }, [location])

  return (
    <Routes>
      {
        auth || remember ? (
          <>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={<Navigate to="/profile"/>}/>
          </>
        ) : (
          <>
            <Route path="/login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/login"/>}/>
          </>
        )
      }
    </Routes>
  );
};

export default Router;