import React, { useState } from 'react'
import axios from 'axios';


const ClientDemo = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const Submit = async () => {
        const response = await axios.post(`http://127.0.0.1:4000/api/user/login`, { email, password })
        console.log(response);
        localStorage.setItem('token', response.data);
        alert(reponse.data)
    }

    return (
        <div className="px-[25px] xl:px-[65px] py-[100px] bg-[url('https://images.unsplash.com/photo-1593173945705-d6451ed5909a?q=80&w=1558&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <h3 className='text-[24px] font-[600] text-center xl:text-[40px]'>Login</h3>
            <form className='flex flex-col items-center justify-center backdrop-blur-sm' onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>Email</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setEmail(e.target.value)} value={email} placeholder='Enter title of book' type="text" />
                </div>
                <div className='flex flex-col my-[15px]'>
                    <label className='text-[18px] capitalize xl:text-[20px] font-[600]'>password</label>
                    <input className='border py-[10px] px-[20px] w-[90vw] xl:w-[50vw]' onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Enter price of book' type="password" />
                </div>

                <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium" onClick={Submit} type="submit">Create</button>
            </form>

        </div>
    )
}



export default ClientDemo



