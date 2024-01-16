import React from "react";

const Cart = ({cart, setCart}) => {
  const itemCount = cart.length;
  console.log(itemCount);
      setCart([...cart, product]);
  return (
    <div className="w-full h-[80vh] bg-yellow-700 text-white flex justify-center items-center">
      <h1>This is the MainCart section </h1>
      <h1>{itemCount}</h1>
    </div>
  );
};

export default Cart;

// import React from "react";

// const Cart = ({ cart, setCart }) => {

//     const itemCount = cart.length;
//     setCart([...cart, product]);
//   return <div>

//     <h1>{itemCount}</h1>
//   </div>;
// };

// export default Cart;

