import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { type Book } from '../types/books.ts'
import { base_url } from '../API/url.ts'
import {bookTableHeaders} from "../types/books.ts"


const BooksOverview = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`${base_url}/books`)
      const res = await response.json()
      setBooks(res.data) 
      console.log(res.data)
      setLoading(false)
      
    }
    fetchBooks()
  }, [])


  if (loading == true)
  {
    return (
      <div>loading</div>
    )
  }
  else {
    return (
      <div>
        <Header />
        <div>
          <h1>Overview</h1>

          <div>Subtext & information </div>
          <div>Gap here</div>

          <h1 className='flex justify-center items-center'>Table</h1>
          <div className='flex justify-center'>
            <table className='table border-separate border-spacing-y-3 w-[80vw]'>
              <thead>
                <tr>
                  {bookTableHeaders.map((header) => (
                    <th key={header.id}>
                      <span className=''>{header.label}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {books.map((entry) => (
                  
                  <tr key={entry.id} className='text-center '>
                    <td className='w-[15%]'>{entry.title}</td>
                    <td className='w-[10%]'>£{entry.price}</td>
                    <td className='w-[15%]'>{entry.author}</td>
                    <td className='w-[10%]'>{entry.publication_year}</td>
                    <td className='w-[30%]'>{entry.genre}</td>
                    <td className='w-[10%]'>{entry.in_stock}</td>
                    <td className='w-[10%]'>{entry.stock_amount}</td>


                  </tr>
                ))}

              </tbody>
            </table>
          </div>


        </div>
        <Footer />
        

      </div>
    )
  }




}

export default BooksOverview