import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[15vh] bg-purple-700 text-white flex justify-center items-center">
      <div>
        <h1>This is the Navbar section </h1>
        <ul className="flex gap-[2rem]">
            <Link to={'/'}>
                <li>Home</li>
            </Link>
            <Link to={'/about'}>
                <li>About</li>
            </Link>
            <Link to={'/contacts'}>
                <li>Conntacts</li>
            </Link>
            <Link to={'/cart'}>
                <li>Cart</li>
            </Link>
            <Link to={'/shop'}>
                <li>Shop</li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
