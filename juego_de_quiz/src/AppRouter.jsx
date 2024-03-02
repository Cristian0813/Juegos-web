import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CategoryPage } from './pages/CategoryPage'
import { Navbar } from './components/Navbar'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/categoria/:category' element={<CategoryPage />} />
            </Routes>
        </>
    )
}
