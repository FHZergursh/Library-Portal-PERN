export const helloWorld = (req, res) => {
  return res.json("Hello world!")
}

export const addBook = (req, res) => {
  try {
  return res.json("create ")

  } catch (error) {
    return res.status(400).json({success: false, message: error})
  }
}

export const getAllBooks = (req, res) => {
  try {
  return res.json("get all")

  } catch (error) {
    return res.status(400).json({success: false, message: error})
  }
}

export const getBook = (req, res) => {
  try {
  return res.json("get one")

  } catch (error) {
    return res.status(400).json({success: false, message: error})
  }
}

export const updateBook = (req, res) => {
  try {
  return res.json("get one")

  } catch (error) {
    return res.status(400).json({success: false, message: error})
  }
}

export const deleteBook = (req, res) => {
  try {
  return res.json("delete")

  } catch (error) {
    return res.status(400).json({success: false, message: error})
  }
}
