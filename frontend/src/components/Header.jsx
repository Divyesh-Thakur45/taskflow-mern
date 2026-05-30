import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="bg-black text-white flex justify-between p-5 items-center">
      <div>
        <Link to={"/"}>
          <h2 className="font-bold text-2xl">Interview Prep</h2>
        </Link>
      </div>
      <div className="flex gap-4">
        <Link to={"/products"}>Products</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Singup</Link>
        <Link to={"/carts/123"}>Carts</Link>
      </div>
    </div>
  );
};

export default Header;
