import React, { useEffect, useState } from "react";
import ClipLoader from 'react-spinners/ClipLoader'
import BeatLoader from "react-spinners/BeatLoader";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [errors, setError] = useState(false)

    let api = "https://api.escuelajs.co/api/v1/products?offset=10&limit=6";

    const dataFetching = async () => {
        try{
            const res = await fetch(api)
            const data = await res.json()
            setProducts(data)
            setLoading(false)
        }catch(err){
            setError('Oops something is wrong')
            console.log('error message');
        }finally{
            console.log('now we are live');
            setLoading(false)
        }
    }
    useEffect(() => {
        dataFetching()
    }, [])

  return (
    <div className="w-full h-auto py-5  bg-red-300 text-white flex justify-center items-center flex-col">
      <h1 className="text-2xl mb-8">This is the Product section </h1>

      {loading && <ClipLoader />}
      {errors}
      <div className="bg-red-800 w-[95%] m-auto py-3 px-3 grid grid-cols-3 gap-x-6 gap-y-8">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.images} alt="" className="w-[10rem]" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <div className="flex justify-between">
              <Link to={`/product/${product.id}`}>
                <button className="py-2 px-4 bg-green-900 text-white">
                  preview
                </button>
              </Link>
              <button className="py-2 px-4 bg-green-900 text-white">
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
