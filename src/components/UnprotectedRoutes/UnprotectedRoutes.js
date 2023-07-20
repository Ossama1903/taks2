import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const UnprotectedRoute = ({ children }) => {
  const [loginStatus, setLoginStatus] = useState(true);
  return !loginStatus ? children : <Navigate to="/" />;
};

export default UnprotectedRoute;
