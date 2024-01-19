import React, { useState } from 'react'
import axios from 'axios';

const BooksCreate = () => {
    const [title, seTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [author, setAuthor] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [type, setType] = useState("");
    const token = localStorage.getItem("token");

    const axiosInstance = axios.create({
        baseURL: 'https://book-store-backend-ru34.onrender.com/api',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const Submit = async () => {
        const response = await axiosInstance.post(`/books/create`, { title, description, price, thumbnail, type, author })
        alert(response.status == 200 ? "Book created successfully" : "error")
    }
    return (
        <div className="px-[25px] xl:px-[65px] py-[100px]">
            <h3 className='text-[24px] font-[600] text-center xl:text-[40px]'>Add Book</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center'>
                <div>
                    <img className='shadow-xl w-[70%]' src='https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/12/liarsdictionary.png?resize=823%2C1024&quality=80&ssl=1' />
                </div>
                <form className='p-[50px]' onSubmit={(e) => e.preventDefault()}>
                    <div className='flex flex-col my-[15px]'>
                        <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>title of book</label>
                        <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[40vw]' onChange={(e) => seTitle(e.target.value)} value={title} placeholder='Enter title of book' type="text" />
                    </div>
                    <div className='flex flex-col my-[15px]'>
                        <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>price of book</label>
                        <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[40vw]' onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Enter price of book' inputMode='numeric' type="number" />
                    </div>
                    <div className='flex flex-col my-[15px]'>
                        <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>description of book</label>
                        <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[40vw]' onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Enter description of book' type="text" />
                    </div>
                    <div className='flex flex-col my-[15px]'>
                        <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>title of author</label>
                        <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[40vw]' onChange={(e) => setAuthor(e.target.value)} value={author} placeholder='Enter title of book author' type="text" />
                    </div>
                    <div className='flex flex-col my-[15px]'>
                        <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>image of book</label>
                        <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[40vw]' onChange={(e) => setThumbnail(e.target.value)} value={thumbnail} placeholder='Enter image of book' type="text" />
                    </div>
                    <div className='flex flex-col my-[15px]'>
                        <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>type of book</label>
                        <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[40vw]' onChange={(e) => setType(e.target.value)} value={type} placeholder='Enter type of book' type="text" />
                    </div>
                    <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium" onClick={Submit} type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default BooksCreate