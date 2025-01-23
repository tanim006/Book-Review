import React from 'react';
import { Link } from 'react-router-dom';
import PagesToRead from '../PagesToRead/PagesToRead';

const ListedBook = ({book}) => {
    const {image,bookId,author,category,review,tags,publisher,pages,yearOfPublishing,rating,bookName} =book
    return (
        <div>
            
            <div className='grid grid-cols-4  border h-auto p-10 rounded-2xl mt-32 mb-28'>
               <div className=' rounded-3xl'>
               <img src={image} alt="" className='max-w-32 h-44   ml-56' />
               </div>

               <div className='max-w-96 space-y-2'>
               <h1 className=' text-4xl font-anton font-semibold'>{bookName}</h1>
               <p className='w-36 font-anton font-semibold '>BY : {author}</p>
               <p className='font-anton text-'> <span className='font-anton font-semibold  '>Tags:  </span>{book.tags.join(', ')}</p>
               <p className='font-anton font-bold '>Publisher : {publisher}</p>
               <hr />
               <div className='flex items-center'>
                <h1>Category : {category}</h1>
                <h1>Rating : {rating}</h1>
                <p>pages :{pages}</p>
                <Link to= {`/books/${bookId}`}>
                <button className="btn btn-secondary bg-black ml-5">View Details</button>
                
                </Link>
               </div>

               </div>
               <div>
                <p className='font-anton text-xl'>{review}</p>
               </div>

            </div>
         
        </div>
    );
};

export default ListedBook;