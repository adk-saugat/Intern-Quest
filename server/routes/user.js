import express from "express"
import bcrypt from "bcryptjs"
import { User } from "../models/user.js"
import { auth } from "../middleware/auth.js"

const userRouter = express.Router()

//Registering User
userRouter.post("/register", async (req, res) => {
  try {
    const user = new User(req.body)
    const token = await user.generateAuthToken()

    res.send({ username: user.username, email: user.email, token })
  } catch (error) {
    res.status(400).send(error)
  }
})

//Logging User In
userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error("Unable to Login!")
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      throw new Error("Unable to login!")
    }

    const token = await user.generateAuthToken()

    res.send({ username: user.username, email: user.email, token })
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

userRouter.get("/", auth, (req, res) => {
  res.send("Authenticated!")
})

export { userRouter }
