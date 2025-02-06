import express from "express"
import { auth } from "../middleware/auth.js"
import { Application } from "../models/application.js"

const appRouter = express.Router()

// Create an application
appRouter.post("/create", auth, async (req, res) => {
  try {
    const application = new Application({ ...req.body, user: req.user._id })
    await application.save()

    await Application.findOne({
      _id: req.user._id,
    }).populate("User")

    res.send(application)
  } catch (error) {
    res.status(400).send({ error })
  }
})

// Get All User Applications
appRouter.get("/", auth, async (req, res) => {
  try {
    const applications = await Application.find({ user: req.user._id })
    res.send(applications)
  } catch (error) {
    res.status(400).send({ error })
  }
})

export { appRouter }
