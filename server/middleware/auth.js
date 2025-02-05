import jwt from "jsonwebtoken"
import "dotenv/config"
import { User } from "../models/user.js"

const auth = async (req, res, next) => {
  try {
    const token = req.header("auth-token")

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.find({ _id: decoded._id, token })

    if (!user) {
      throw new Error()
    }
    req.user = user
    req.token = token

    next()
  } catch (error) {
    res.status(401).send({ error: "Please Authenticate." })
  }
}

export { auth }
