import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const BookDelete = () => {
    const ID = useParams()
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const axiosInstance = axios.create({
        baseURL: 'https://book-store-backend-ru34.onrender.com/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });


    const Delete = async () => {
        const response = await axiosInstance.delete(`/books/delete/${ID.id}`);
        alert(response.data.message)
        navigate('/books')
    }


    return (
        <div className='py-[100px] flex flex-col items-center px-[25px]'>
            <h3 className='text-[24px] text-center lg:text-[30px] font-[600]'>Do you really want to delete this book</h3>
            <button onClick={Delete} className='bg-red-400 mt-5 hover:bg-white hover:text-red-400 transition-all rounded-md hover:border-red-400 border  text-white px-[35px] py-[10px]'>Delete</button>
        </div>
    )
}

export default BookDelete
