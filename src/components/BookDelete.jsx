import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BookDelete = () => {
    const ID = useParams()

    const token = localStorage.getItem('token')
    const axiosInstance = axios.create({
        baseURL: 'http://127.0.0.1:4000',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });


    const Delete = async () => {
        const response = await axiosInstance.delete(`/api/books/delete/${ID.id}`);
        console.log(response)
        alert(response.data.message)
    }


    return (
        <div>
            <h3 className='text-[30px] font-[600]'>Do you really want to delete this book</h3>
            <button onClick={Delete} className='bg-red-400 text-white px-[35px] py-[10px]'>Delete</button>
        </div>
    )
}

export default BookDelete