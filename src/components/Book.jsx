import React from 'react';

const Book = ({book}) => {
    return (
        <div className='overflow-hidden relative'>
            <img 
            src={book.image} 
            alt="Book Cover"
            className='object-cover w-full h-56 md:h-64 xl:h-80'
             />
            <div className='flex flex-col bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 px-6 py-4 rounded absolute inset-0 transition-opacity duration-200'>
                <h2>{book.title}</h2>
                <p>{book.subtitle.substring(0, 45)}...</p>
                <p className='mt-auto'>Price: {book.price}</p>
            </div>
        </div>
    );
};

export default Book;