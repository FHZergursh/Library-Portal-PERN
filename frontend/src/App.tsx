import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BooksOverview from './pages/BooksOverview'
import Book from './pages/Book'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/books/overview' element={<BooksOverview/>} />
        <Route path='/books/:id' element={<Book />} />
      </Routes>
    </div>
  )
}

export default App