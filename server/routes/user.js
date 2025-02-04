import express from "express"
import mongoose from "mongoose"
import { User } from "../models/user.js"

const userRouter = express.Router()

//Registering User
userRouter.post("/register", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()

    res.send({ username: user.username, email: user.email })
  } catch (error) {
    res.status(400).send(error.errors)
  }
})

//Logging User In
userRouter.post("/login", async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({ email })

    if (!user) {
      throw new Error("Unable to login.")
    }
    res.send(user)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

export { userRouter }
