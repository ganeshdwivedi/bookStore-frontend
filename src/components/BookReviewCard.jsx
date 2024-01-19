import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const BookReviewCard = () => {

    const ID = useParams();
   

    const token = localStorage.getItem('token')
    const [book, setBook] = useState([]);

    const getBook = async () => {
        const response = await axios.get(`https://book-store-backend-ru34.onrender.com/api/books/${ID.id}`);
          setBook(response.data);
    }
    useEffect(() => {
        getBook()
    }, [])

    return (
        <div className="pt-14 md:pt-10 text-start">
            <div className="flex md:my-20 flex-col items-center md:items-start md:flex-row md:justify-center">
                <div className="flex order-2 md:order-none md:overflow-hidden overflow-x-scroll flex-row md:flex-col">
                    {/* {image?.map((item, index) => (
                        <img
                            key={index}
                            onClick={() => setThumbnail(item)}
                            className=" w-16 m-1"
                            alt={product?.title}
                            src={urlFor(item)}
                        />
                    ))} */}
                </div>
                <div className="md:w-[40vw] order-1 mx-3 overflow-hidden w-[90vw] h-full md:h-full ">
                    <img
                        className="object-cover rounded-md"
                        src={book.thumbnail}
                    />
                </div>

                <div className="w-[90vw] order-3 my-5 md:mx-16 md:w-[20vw]">

                    <h1 className="text-2xl">{book.title}</h1>
                    <h1 className="text-base">{book.author}</h1>
                    <h1 className="text-sm">{book.type}</h1>

                    <div className="my-5">
                        <h1 className="text-base font-medium">₹ {book.price}</h1>
                        <p className="text-slate-500 text-sm">incl. of taxes
                        </p>
                        <p className="text-slate-500 text-sm">(Also includes all applicable duties)</p>
                    </div>

                    <div className="flex flex-col">
                        <Link className={token ? "text-center bg-black my-2 md:w-[25vw] rounded-[25px] py-2 text-white" : "hidden"} to={`/books/update/${book._id}`}>
                            Update This Book
                        </Link>
                        <Link className={token ? "text-center bg-black my-2 md:w-[25vw] rounded-[25px] py-2 text-white" : "hidden"} to={`/books/delete/${book._id}`}>

                            Delete This Book

                        </Link>
                        <button
                            className="bg-black my-2 md:w-[25vw] rounded-[25px] py-2 text-white"
                        >
                            Add to Bag
                        </button>
                        <button
                            className="border-2 border-black my-2 md:w-[25vw] rounded-[25px] py-2"
                        >
                            Add to Favourite
                        </button></div>
                    <div className="my-10">
                        <h1 className="text-[15px] text-justify font-medium w-[90vw] md:w-[25vw]">{book.description}</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BookReviewCard
