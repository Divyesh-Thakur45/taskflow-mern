import React, { useState } from "react";
import AuthForm from "../ui/AuthForm";
import axios from "axios";
import { useAuth } from "../Contexts/Auth";
import { useRole } from "../Contexts/RoleContext";

const Login = () => {
  const { setIsAuth } = useAuth();
  const { setRole } = useRole();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const user = await axios.post(
      "http://localhost:8080/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    if (user?.data?.success) {
      setIsAuth(true);
      setRole(user?.data?.role);
    }
  };

  const fields = [
    {
      name: "email",
      type: "email",
      placeholder: "Enter Email",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Password",
    },
  ];

  return (
    <AuthForm
      title="Login"
      fields={fields}
      buttonText="Login"
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
