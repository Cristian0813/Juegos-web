import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div>
            <header className='bg-gray-900 py-5 flex justify-start px-4'>
                <Link to='/' className='flex justify-center items-center'>
                    <img src="/quiz-2.png" alt="Logo Quiz" className='h-16 w-16 mr-2' />
                    <h1 className="text-white text-2xl font-bold-hover:scale-110 transition-all duration-500">Quiz App</h1>
                </Link>
            </header>
        </div>
    )
}
