import React from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const { books } = useLoaderData();
  // console.log(books)
  return (
    <div className="my-container">
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6'>
        {books.map((book) => (
          <Book key={book.isbn13} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
