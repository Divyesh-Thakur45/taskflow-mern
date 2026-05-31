import React, { useEffect, useState } from "react";
import AuthForm from "../ui/AuthForm";
import axios from "axios";
import { useAuth } from "../Contexts/Auth";

const Signup = () => {
  const { setIsAuth } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
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
    const { name, email, password } = formData;
    const user = await axios.post(
      "http://localhost:8080/auth/signup",
      {
        name,
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );
    if (user.data?.success) {
      setIsAuth(true);
    }
  };

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Enter Name",
    },
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
      title="Signup"
      fields={fields}
      buttonText="Signup"
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Signup;
