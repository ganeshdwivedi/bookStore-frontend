import React from 'react'

const BookCard = ({ imgsrc, title, author, price }) => {

    return (

        <div className='p-3'>
            <div className='w-[45vw] md:w-[23vw] h-[210px] md:h-[390px]  overflow-hidden'><img className='object-cover' src={imgsrc} alt="okay" /></div>
            <div>
                <h3 className='tex-[18px] lg:text-[22px] font-medium my-1'>{title}</h3>
                <p className='text-slate-700 text-sm my-1'>{author}</p>
                <h3 className='text-[15px] font-medium my-2'>MRP: ₹ {price}</h3>
            </div>
        </div>

    )
}

export default BookCard