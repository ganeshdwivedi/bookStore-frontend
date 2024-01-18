import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Logo from "../assets/Logo";
import { Link } from "react-router-dom";

function Navbar() {
    const [toggle, settoggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [token, setToken] = useState(null);
    const Toggle = () => {
        settoggle(!toggle);
    };
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);
        window.addEventListener('scroll', handleIsSticky);
        setToken(localStorage.getItem('token'))
    }, [isSticky])
    console.log(token)
    const okay = localStorage.getItem('token')
    console.log(okay)
    const navlinkcss =
        "text-black text-[#222744] text-[16px] font-[400] ";
    const mobNavlinkcss =
        "text-[25px] font-medium hover:underline decoration-black decoration-2 underline-offset-8";


    return (
        <>
            <nav className="relative">
                <div className={"flex fixed lg:sticky bg-white shadow-md  w-full z-40 flex-row justify-between xl:px-[65px] py-[10px] lg:py-[19px] items-center px-[25px]"}>
                    <Link to={"/"}>
                        <Logo className={"xl:w-[108px] w-[100px] h-[40px] xl:h-[42px]"} />
                    </Link>
                    <div className="lg:block hidden">
                        <ul className="flex flex-row items-center gap-x-[40px]">
                            <Link to={'/books'}>
                                <li className={navlinkcss}>
                                    All Books
                                </li>
                            </Link>

                            <Link to={'/books/create'} className={token ? "block" : "hidden"}>
                                <li className={navlinkcss}>Add Book</li>
                            </Link>
                            <Link className={token ? "hidden" : "block"} to={'/login'}>
                                <li>
                                    <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium">
                                        Login
                                    </button>
                                </li>
                            </Link>
                        </ul>
                    </div>


                    <div className="flex lg:hidden flex-row gap-5">
                        <button
                            onClick={Toggle}
                            className="text-black block lg:hidden Hamburger "
                        >
                            {toggle ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
                        </button></div>
                </div>

            </nav >
            {toggle && (
                <div
                    className="p-10 z-10 pl-10 duration-1000 delay-300 ease-in-out pt-36 fixed bg-white w-[100vw] h-[100vh]"
                >
                    <div className="">
                        <div className="lg:hidden block">
                            <ul className="flex flex-col gap-4">
                                <Link to={'/books'}>
                                    <li className={mobNavlinkcss}>
                                        All Books
                                    </li>
                                </Link>

                                <Link to={'/books/create'} className={token ? "block" : "hidden"}>
                                    <li className={mobNavlinkcss}>Add Book</li>
                                </Link>
                                <Link className={token ? "hidden" : "block"} to={'/login'}>
                                    <li>
                                        <button className="rounded-[13px] border bg-[#556EE6] lg:px-[45px] px-[25px] py-[7px] hover:border hover:border-[#556EE6] hover:text-[#556EE6] hover:bg-[white] transition-colors lg:py-[14px]  relative text-white font-medium">
                                            Login
                                        </button>
                                    </li>
                                </Link>
                            </ul>
                        </div>


                    </div >

                </ div>
            )
            }
        </>
    );
}

export default Navbar;
