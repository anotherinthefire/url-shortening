import { Outlet } from "react-router-dom"
import { useState } from "react"

import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"

import burger from "../assets/burger.svg"
import ex from "../assets/ex.svg"


const Layout = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <header className="header max-width py-5">
                <div className="flex items-center justify-between">
                    <Header />
                    {isOpen && (
                        <Sidebar />
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="uppercase text-sm tracking-wide md:hidden"
                    >
                        {isOpen ? <img src={ex} className={`w-8 duration-500 ${isOpen ? "rotate-[360deg]" : "rotate-[360deg"}`} /> : <img src={burger} className={`w-8 duration-500  ${isOpen ? "rotate-[360deg]" : "rotate-[360deg"}`} />}
                    </button>
                </div>
            </header>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout