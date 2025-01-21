import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    const [dataLength,setDataLength] = useState(6)

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center mt-20'>ALL The Books</h1>
                <h1>Books : {books.length}</h1>
            </div>
            <div className='grid grid-cols-3 p-20 gap-6'>
                {books.slice(0,dataLength).map(book => (
                    <Book key={book.bookId} book={book}></Book>
                ))}
            </div>
           <div className={dataLength==books.length && 'hidden'}>
           <button onClick={()=>setDataLength(books.length)} className='btn btn-primary mx-auto'>Show All</button>
           </div>
        </div>
    );
};

export default Books;
