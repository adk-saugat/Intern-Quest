import express from "express"
import "./db/mongoose.js"
import "dotenv/config"
import { userRouter } from "./routes/user.js"

const app = express()

app.use(userRouter)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))
