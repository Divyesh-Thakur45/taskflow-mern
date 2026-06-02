import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAuth } from "../Contexts/Auth";
import { useRole } from "../Contexts/RoleContext";

const Header = () => {
  const { isAuth, setIsAuth } = useAuth();
  const { role, setRole } = useRole();
  const handleLogout = async () => {
    const res = await axios.post(
      "http://localhost:8080/auth/logout",
      {},
      {
        withCredentials: true,
      },
    );

    setIsAuth(false);
  };
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:8080/auth/me", {
          withCredentials: true,
        });

        setRole(res.data?.data?.role);

        setIsAuth(res.data?.success);
      } catch (error) {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, [role]);
  return (
    <div className="bg-black text-white flex justify-between p-5 items-center">
      <div>
        <Link to={"/"}>
          <h2 className="font-bold text-2xl">Interview Prep</h2>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <Link to={"/products"}>Products</Link>
        {isAuth ? (
          <>
            <button
              className="border rounded-2xl py-2 px-3 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to={"/login"}>Login</Link>
            <Link to={"/signup"}>Singup</Link>
          </>
        )}

        <Link to={"/carts"}>Carts</Link>
        {role === "admin" && <Link to={"/admin"}>Admin</Link>}
      </div>
    </div>
  );
};

export default Header;
