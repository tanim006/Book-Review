import React from "react";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;

  return (
    <div>
      <div className="card bg-base-100 border shadow-lg  border-black">
        <figure className="px-10 pt-10">
          <img src={image} alt="Book Cover" className="rounded-xl" />
        </figure>
        <div className="card-body">
          {/* Render Tags with Spacing */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-white bg-black rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title text-2xl font-bold">{bookName}</h2>
          <p>Written By: {author}</p>
          <hr className="border-black" />
          <div className="card-actions justify-end">
            <p>{category}</p>
            <div className="flex items-center gap-x-2">
              <p className="text-lg">{rating}</p>
              <CiStar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
