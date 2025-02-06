import "../models/application.js"
import express from "express"
import { auth } from "../middleware/auth.js"

const appRouter = express.Router()

appRouter.get("/", auth, (req, res) => {
  res.send("App router working")
})

export { appRouter }
