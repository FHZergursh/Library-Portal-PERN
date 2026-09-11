import { sql } from "../db.js"

export const registerUser = async (req, res) => {
  try {
    const {username, email, password} = req.body

    if (!username || !email || !password)
    {
      return res.status(400).json({success: false, message: "Missing mandatory account info! Cannot create new user"})
    }

    const len = password.length 
    if (len < 6)
    {
      return res.status(400).json({success: false, message: "Password provided is too short to be considered valid"})
    }

    const created = await sql.query(`INSERT INTO users(username, email, password) VALUES ($1, $2, $3)`, [username, email, password])

    return res.status(200).json({success: true, data: created})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
  
}

export const getUser = async (req, res) => {
  try {
    const {user_id} = req.params

    if (!user_id) {
      return res.status(400).json({success: false, message: "user_id not provided"})
    }

    const user = await sql.query(`SELECT * FROM users WHERE user_id = $1`, [user_id])

    const len = user.length
    if (len == 0) {
      return res.status(400).json({success: false, message: "User not found"})
    }
    else {
      return res.status(200).json({success: true, data: user})
    }
    



  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await sql.query("SELECT * FROM users")

    return res.status(200).json({success: true, data: users})

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const updateUser = async (req, res) => {
  try {
    const {user_id} = req.params
    const {username, email} = req.body

  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}

export const deleteUser = async (req, res) => {
  try {
    const {user_id} = req.params

    if (!user_id) {
      return res.status(400).json({success: false, message: "user_id not provided"})
    }

    const exists = await sql.query(`SELECT * FROM users WHERE user_id = $1`, [user_id])

    len = exists.length
    if (len == 0)
    {
      return res.status(400).json({success: false, message: "Account selected to delete does not exist"})
    }
    else {
      const deleted = await sql.query(`DELETE * FROM users WHERE user_id = $1`, [user_id])
    }


  } catch (error) {
    console.log(error)
    return res.status(400).json({success: false, message: error})
  }
}