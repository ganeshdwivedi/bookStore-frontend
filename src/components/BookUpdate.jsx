import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';


const BookUpdate = () => {
    const [title, seTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [type, setType] = useState("");

    const ID = useParams();
    console.log(ID)
    console.log(ID.id)

    const token = localStorage.getItem("token");
    console.log(`token: ${token}`);

    const axiosInstance = axios.create({
        baseURL: 'https://book-store-backend-ru34.onrender.com/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const Submit = async () => {
        const response = await axiosInstance.put(`/books/update/${ID.id}`, { title, description, price, thumbnail, type, author })
        console.log(response)
        alert(response.data.message)
    }
    return (
        <div className="px-[25px] xl:px-[65px] py-[100px] bg-[url('https://images.unsplash.com/photo-1593173945705-d6451ed5909a?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <h3 className='text-[24px] font-[600] text-center xl:text-[40px]'>Update Book</h3>
            <form className='flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm' onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>title of book</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => seTitle(e.target.value)} value={title} placeholder='Enter title of book' type="text" />
                </div>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>price of book</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter price of book' inputMode='numeric' type="number" />
                </div>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>description of book</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Enter description of book' type="text" />
                </div>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>title of author</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Enter title of book author' type="text" />
                </div>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>image of book</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setThumbnail(e.target.value)} value={thumbnail} placeholder='Enter image of book' type="text" />
                </div>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>type of book</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setType(e.target.value)} value={type} placeholder='Enter type of book' type="text" />
                </div>
                <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium" onClick={Submit} type="submit">Update</button>
            </form>

        </div>
    )
}

export default BookUpdate
