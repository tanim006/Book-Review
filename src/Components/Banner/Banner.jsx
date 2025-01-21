import React from "react";
import bannerImage from "../../assets/beatriz-perez-moya-XN4T2PVUUgk-unsplash.jpg"

const Banner = () => {
  return (
    <div>
     <div className="flex mx-auto items-center bg-slate-200 p-6 rounded-xl mt-20">
     <div>
      <h1 className="text-8xl mb-6 font-semibold">Books to freshen up <br />your bookshelf</h1>
      <p className="text-xl  w-1/2 mb-6">Revitalize your bookshelf with a mix of inspiring reads! From captivating novels and insightful self-help books to engaging memoirs and thought-provoking nonfiction</p>
      <button className="btn btn-ghost border-black text-xl ">View The List</button>
      </div>
      <img className="w-1/2 rounded-xl" src={bannerImage} alt="" />
     </div>
    </div>
  );
};

export default Banner;
