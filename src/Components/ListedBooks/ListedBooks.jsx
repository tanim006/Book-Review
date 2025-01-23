import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredBook } from '../../Utility/LocalStorage';
import ListedBook from '../ListedBook/ListedBook';

const ListedBooks = () => {
    const books = useLoaderData()
    const [ListedBooks,setListedBooks] = useState([])
    useEffect (() =>{
        const storedBooksIds = getStoredBook()
        if(books.length >0){
            const booksListed = books.filter (book =>storedBooksIds.includes(book.bookId))
            setListedBooks(booksListed)

        }
      
    },[])
    return (
        <div>
            <div className='bg-green-300 p-14 rounded-3xl mt-10'>
            <h1>
                <h1 className='font-anton text-6xl font-bold text-center '>Books</h1>
            
            </h1>
            </div>
            <div>
    {
        ListedBooks.map(book => <ListedBook key={book.bookId} book={book}></ListedBook>)
        
    }
    <div>
        
    </div>
    
</div>

        </div>
    );
};

export default ListedBooks;