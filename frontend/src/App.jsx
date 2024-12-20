import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateBook from "./pages/CreateBooks.jsx"
import DeleteBook from "./pages/DeleteBook.jsx"
import EditBook from "./pages/EditBook.jsx"
import ShowBook from "./pages/ShowBook.jsx"
import Home from "./pages/Home.jsx"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/books/create' element={<CreateBook/>} />
        <Route path='/books/details/:id' element={<ShowBook/>} />
        <Route path='/books/edit/:id' element={<EditBook/>} />
        <Route path='/books/delete/:id' element={<DeleteBook/>} />
      </Routes>
    </div>
  )
}

export default App
