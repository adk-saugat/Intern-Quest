import express from "express"
import "./db/mongoose.js"
import "dotenv/config"
import { userRouter } from "./routes/user.js"
import { appRouter } from "./routes/application.js"

const app = express()

app.use(express.json())
app.use("/users", userRouter)
app.use("/applications", appRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`))
