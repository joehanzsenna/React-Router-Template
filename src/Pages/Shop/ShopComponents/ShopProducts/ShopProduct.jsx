import React from "react";
import FirstContent from "./FirstContent";
// import SecondContent from "./SecondContent";
import { Link, Outlet } from "react-router-dom";
import SecondContent from "./SecondContent";

const ShopProduct = () => {
  return (
    <div className="w-full h-[80vh] bg-red-900 text-white flex justify-center items-center flex-col">
      <h1>This is the ShopProduct section </h1>
      <div className="flex gap-x-10">
        <Link to={'/shop/first'}>
            {/* <FirstContent/> */}
            <h1>First btn</h1>
        </Link>
        <Link to={'/shop/second'}>
            <h1>Second btn</h1>
            {/* <SecondContent/> */}
        </Link>
      </div>
        <Outlet/>
    </div>
  );
};

export default ShopProduct;
