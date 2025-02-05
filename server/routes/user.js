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

// Get User Profile
userRouter.get("/me", auth, (req, res) => {
  res.send(req.user)
})

//Update User
userRouter.patch("/me", auth, async (req, res) => {
  const allowedUpdates = ["username", "email", "password"]
  const updates = Object.keys(req.body)

  const isAllowed = updates.every((update) => allowedUpdates.includes(update))

  if (!isAllowed) {
    return res.status(404).send({ error: "No Update Key Found!" })
  }

  try {
    updates.forEach((update) => (req.user[update] = req.body[update]))
    await req.user.save()

    res.send(req.user)
  } catch (error) {
    res.status(400).send({ error: error.message })
  }
})

export { userRouter }
