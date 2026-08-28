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

          <div>Table</div>
          <table>
            <thead>
              <tr>
                {bookTableHeaders.map((header) => (
                  <th key={header.id}>
                    <span>{header.label}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books.map((entry) => (
                <tr key={entry.id}>

                  <td>{entry.title}</td>
                  <td>{entry.price}</td>
                  <td>{entry.author}</td>
                  <td>{entry.publication_year}</td>
                  <td>{entry.genre}</td>
                  <td>{entry.in_stock}</td>
                  <td>{entry.stock_amount}</td>


                </tr>
              ))}

            </tbody>
          </table>


        </div>
        <Footer />
        

      </div>
    )
  }




}

export default BooksOverview