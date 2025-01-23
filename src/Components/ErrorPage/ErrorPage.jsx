import React from "react";
import four from "../../assets/404-3025721-2526919.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="">
          <h1 className="text-6xl font-anton font-semibold">Bad GateWay</h1>
         <Link to ="/"> <button className="btn border border-black mt-5">Back to Home</button></Link>
        </div>
        <img className="w-1/2 h-1/2" src={four} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
