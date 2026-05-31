import React from "react";
import { useAuth } from "../Contexts/Auth";
import Login from "../pages/Login";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useAuth();

  console.log(
    "🚀 ~ ProtectedRoute.jsx:8 ~ ProtectedRoute ~ setIsAuth:",
    isAuth,
  );

  if (!isAuth) {
    return <Login />;
  }
  return children;
};

export default ProtectedRoute;
