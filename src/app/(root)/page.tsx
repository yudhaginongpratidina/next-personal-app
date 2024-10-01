"use client"
import { useState } from "react";

import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Page() {

    const navList: { id: number, name: string, href: string }[] = [
        { id: 1, name: "About", href: "/" },
        { id: 2, name: "Skill", href: "/" },
        { id: 3, name: "Gear", href: "/" },
        { id: 4, name: "Project", href: "/" },
        { id: 5, name: "Contact", href: "/" },
    ]

    const [showNav, setShowNav] = useState<boolean>(false)
    const toggleNav = (e:React.MouseEvent) => {
        e.preventDefault()
        setShowNav(!showNav)
    }

    return (
        <div>

            <nav className="w-full fixed top-0">
                <div className="w-full h-16 px-6 box-border border-b shadow-md drop-shadow-md flex justify-between items-center bg-white">
                    <h1 className="text-lg font-semibold">YUDHA </h1>

                    <div className="hidden md:flex items-center gap-4">
                        {navList.map((item) => (
                            <Link
                                key={item.id}
                                href={item.href}
                                className="text-lg font-medium hover:underline hover:underline-offset-8"
                            >{item.name}</Link>
                        ))}
                        <Link
                            href={"/"}
                            className="p-2 border text-sm font-medium bg-black hover:bg-gray-800 text-white rounded"
                        >Contact</Link>
                    </div>

                    <button onClick={toggleNav} className="md:hidden p-0.5 border border-black rounded">
                        {showNav ? <IoMdClose className="w-6 h-6" /> : <IoMenuSharp className="w-6 h-6" />}
                    </button>
                </div>

                <div className={`w-full box-border px-6 py-4 ${showNav ? "flex" : "hidden"} flex-col gap-4 md:hidden border border-b shadow-md bg-white`}>
                    
                    {navList.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="w-full flex items-center justify-between text-lg font-medium hover:underline hover:underline-offset-8"
                        >
                            {item.name}
                            <IoIosArrowForward className="w-4 h-4" />
                        </Link>
                    ))}

                    <Link href={"/"}>
                        <button className="w-full p-2 bg-black hover:bg-gray-800 text-white rounded">
                            Contact
                        </button>
                    </Link>
                </div>
            </nav>

            <div className="w-full h-[400px] px-6 box-border flex items-center border-b bg-black">
                <h1 className="text-3xl text-white">Hi, Im Yudha</h1>
                <Link href={"/"}></Link>
            </div>


            <button className="fixed bottom-16 right-6 p-2 border bg-white border-black rounded">
                <MdOutlineKeyboardArrowUp className="w-6 h-6" />
            </button>
        </div>
    )
}