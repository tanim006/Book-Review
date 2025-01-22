import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { savedBook } from '../../Utility/LocalStorage';



const BookDetails = () => {
    const books = useLoaderData(); // Loader data fetched from Data.json
    const { BookId} = useParams(); // URL parameter with case-sensitive name
    const idInt = parseInt(BookId); // Convert URL parameter to integer

    // Correctly match bookId from the data
    const book = books.find(book => book.bookId === idInt);

    console.log(book); // Check the matched book object or undefined if not found
    const handleBookAdd = () => {
       savedBook(idInt)
       toast('added ')
    };
    

    return (
        <div>
           <div className='flex items-center m-20 '>
         <div className='w-1/2  rounded-xl '>
         <img src={book.image} alt="" className='w-1/2 p-5 ml-56' />
         </div>
            <div className='w-1/2 space-y-5 ml-10 '>
                <h1 className='text-8xl font-semibold font-anton'>{book.bookName}</h1>
                <p className='text-3xl font-anton'>By  :{book.author}</p>
                <p className='text-2xl font-anton'>{book.category}</p>
                <p className=' text-xl  font-anton '><span className='text-2xl font-bold'>Review : </span>{book.review}</p>
                <p className='font-anton text-xl'> <span className='font-anton font-semibold text-3xl'>Tags:  </span>{book.tags.join(', ')}</p>

                <p className='font-anton text-xl'>Publisher    {book.publisher}</p>
                <p className='font-anton text-xl'>Year of Publishing  : {book.yearOfPublishing}</p>
                <p className='font-anton text-xl'>Rating : {book.rating}</p>

                <div className='space-x-4'>
                    <button onClick={handleBookAdd} className="btn w-24 h-14 text-lg  bg-black text-white">Read</button>
                    <button onClick={handleBookAdd} className="btn w-24 h-14 text-lg bg-white text-black border-black ">Wishlist</button>
                </div>
            </div>
           </div>
           <ToastContainer />
        </div>
    );
};

export default BookDetails;
