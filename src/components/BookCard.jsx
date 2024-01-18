import React from 'react'
import { useParams } from 'react-router-dom'

const BookCard = ({ imgsrc, title, author, type, price }) => {

    return (

        <div className='p-3'>
            <div className='w-[45vw] md:w-[23vw] h-[210px] md:h-[300px] overflow-hidden'><img className='object-cover' src={imgsrc} alt="okay" /></div>
            <div>
                <h3 className='text-base font-medium my-1'>{title}</h3>
                <p className='text-slate-700 text-sm my-1'>{author}</p>
                <p className='text-slate-700 text-sm my-1'>{type}</p>
                <h3 className='text-[15px] font-medium my-2'>MRP: ₹ {price}</h3>
            </div>
        </div>

    )
}

export default BookCard