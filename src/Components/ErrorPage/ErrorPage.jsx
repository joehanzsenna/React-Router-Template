import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    let navigate = useNavigate()

  return (
    <div className="w-full h-[80vh] bg-red-900 text-white flex justify-center items-center">
      <div>
        <h1>Ooops seems like you took the wrong path </h1>
        {/* <br /> */}
        <Link  onClick={() => navigate(-1)}>
          <h2>Go back</h2>
        </Link>
        <Link to={'/'}>
          <h2>Go to the home page</h2>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
