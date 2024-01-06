import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const BookDetails = () => {
    const  navigation = useNavigation()
    if(navigation.state === 'loading'){
        return <LoadingSpinner/>
    }

  const { image, title, authors, publisher, year, rating, desc, price, url } =
    useLoaderData();
    

    const [fold, setFold] = useState(true)
  // console.log(bookData)
  return (
    <div className="my-container">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* book image part */}
        <div className="lg:w-1/2 h-full">
          <img
            src={image}
            alt="book-Cover"
            className="object-cover w-full lg:h-full"
          />
        </div>

        {/* book text part */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge">BRAND NEW</p>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-none">
            {title}
          </h1>
          <p className="text-gray-900">Authors: {authors}</p>
          <p className="text-gray-900">Publisher: {publisher}</p>
          <p className="text-gray-900">Year: {year}</p>
          <p className="text-gray-900 mb-4">Rating: {rating}</p>
          {
            fold ? 
            <>
                <p>
                    {desc.substring(0,100)}...
                    <span onClick={()=>setFold(!fold)} className="cursor-pointer text-blue-700">read more</span>
                </p>
            </>
            :
            <>
                <p>
                    {desc}...
                    <span onClick={()=>setFold(!fold)} className="cursor-pointer text-blue-700">see less</span>
                </p>
            </>
          }
          <div className="flex gap-5 items-center mt-8">
            <a href={url} target="_blank" className="btn">
              Buy Now
            </a>
            <p className="items-center text-gray-600 font-extrabold text-base">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
