import mongoose from "mongoose"
import "dotenv/config"

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database connected!"))
  .catch((error) => console.log(error.message))
