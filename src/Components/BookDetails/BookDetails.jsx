import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
    const books = useLoaderData(); // Loader data fetched from Data.json
    const { BookId } = useParams(); // URL parameter with case-sensitive name
    const idInt = parseInt(BookId); // Convert URL parameter to integer

    // Correctly match bookId from the data
    const book = books.find(book => book.bookId === idInt);

    console.log(book); // Check the matched book object or undefined if not found

    return (
        <div>
           <h1>details of : {BookId}</h1>
        </div>
    );
};

export default BookDetails;
