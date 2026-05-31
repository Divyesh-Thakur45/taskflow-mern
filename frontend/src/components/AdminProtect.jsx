import React from "react";
import { useRole } from "../Contexts/RoleContext";

const AdminProtect = ({ children }) => {
  const { role } = useRole();
  if (role === "admin") {
    return children;
  }
};

export default AdminProtect;
