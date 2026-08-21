import { sql } from "../db.js"


export const helloWorld = (req, res) => {
  return res.json("Hello world!")
}

export const addBook = async (req, res) => {
  try {
    const {title, price, author, publication_year, genre, in_stock, stock_amount } = req.body

    if (!title || !in_stock) //required fields
    {
      return res.status(400).json({success: false, message: "Please include a title and whether or not the book is available"})
    }

    const created = await sql.query(`
      INSERT INTO books(title, price, author, publication_year, genre, in_stock, stock_amount)
      VALUES ($1, $2, $3, $4, $5, $6, $7)`, [title, price, author, publication_year, genre, in_stock, stock_amount])

    if (!created)
    {
      return res.status(400).json({success: false, message: "Unable to insert new book! Potential server error."})
    }

    return res.status(200).json({succes: true, data: created[0]})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getAllBooks = async (req, res) => {
  try {
  
  const all = await sql.query(`SELECT * from books`)

  return res.status(200).json({success: true, data: all})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getBook = async (req, res) => {
  try {
  const {id} = req.params

  if (!id)
  {
    return res.status(400).json({success: false, message: "ID not provided!"})
  }

  const book = await sql.query(`SELECT * FROM books WHERE id = $1`, [id])

  return res.status(200).json({success: true, data: book[0]})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const updateBook = async (req, res) => {
  try {
    const {id} = req.params
    const {title, price, author, publication_year, genre, in_stock, stock_amount } = req.body

    if (!title && !price && !author && !publication_year && !genre && !in_stock && !stock_amount)
    {
      return res.status(400).json({success: false, message: "No data has been provided."})
    }

    const exists = await sql.query(`SELECT * FROM books WHERE id = $1`, [id])
    if (exists.length === 0) 
    {
      return res.status(400).josn({success: false, message: "No book with that ID exists"})
    }

    const updatedBook = await sql.query(`UPDATE books
      SET title = $1, price = $2, author = $3, publication_year = $4, genre = $5, in_stock = $6, stock_amount = $7
      WHERE id = $8`,
    [title, price, author, publication_year, genre, in_stock, stock_amount, id])

    return res.status(200).json({success: true, data: updatedBook})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const deleteBook = async (req, res) => {
  try {
    const {id} = req.params

    if (!id) {
      return res.status(400).json({success: false, message: "Please provide a valid ID!"})
    }

    const deleted = await sql.query(`DELETE FROM books WHERE id = $1`, [id])

    return res.status(200).json({success: true, data: deleted})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}
