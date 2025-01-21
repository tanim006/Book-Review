import React from "react";
import { CiStar } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category, rating } = book;

  return (
    <Link to= {`/books/${bookId}`}>
      <div className="card bg-base-100 border shadow-lg border-black cursor-pointer">
        {/* Image Section */}
        <figure className="px-10 pt-10">
          <img src={image} alt="Book Cover" className="rounded-xl" />
        </figure>

        {/* Card Body */}
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
          <div className="card-actions justify-between">
            <p>{category}</p>
            <div className="flex items-center gap-x-2">
              <p className="text-lg">{rating}</p>
              <CiStar />
            </div>
          
          </div>
        </div>
      </div>
    </Link>
    
      
  
  );
};

export default Book;
