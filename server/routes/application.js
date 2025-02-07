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

    res.status(201).send(application)
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

// Update Application Status
appRouter.patch("/:id", auth, async (req, res) => {
  const application = await Application.findOne({
    user: req.user.id,
    _id: req.params.id,
  })

  if (!application) {
    return res.status(404).send({ error: "Application not found!" })
  }

  const updates = Object.keys(req.body)

  if (updates.length > 1 || !updates.includes("status")) {
    return res.status(400).send({ error: "Can only update status!" })
  }

  try {
    application.status = req.body.status
    await application.save()
    res.send(application)
  } catch (error) {
    res.status(400).send(error)
  }
})

// Deleting Application
appRouter.delete("/:id", auth, async (req, res) => {
  try {
    const application = await Application.deleteOne({
      _id: req.params.id,
      user: req.user._id,
    })

    if (!application) {
      return res.status(404).send({ error: "Application not Found!" })
    }

    res.send(application)
  } catch (error) {
    res.status(400).send(error)
  }
})

export { appRouter }
