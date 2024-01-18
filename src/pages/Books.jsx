import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Books = () => {
    const [books, setBooks] = useState([]);
    console.log(localStorage.getItem('token'))
    const getAllBooks = async () => {
        const response = await axios.get('http://127.0.0.1:4000/api/books');
        // console.log(response);
        setBooks(response.data.books);
        console.log(response.data.books)
    }
    useEffect(() => {
        getAllBooks()
    }, [])


    return (
        <div className="grid md:w-[80vw] w-[100vw] grid-cols-2 md:grid-cols-3 md:gap-x-10">
            {
                books.length != 0 ? books.map((item) => <Link key={item._id} to={`/books/${item._id}`}><BookCard title={item.title} type={item.type} price={item.price} author={item.author} imgsrc={item.thumbnail} /></Link>) : <h3>There is no product in library</h3>
            }


        </div>
    )
}

export default Books