import mongoose from "mongoose"
import validator from "validator"

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Should be a valid Email!")
      }
    },
  },
  password: {
    type: "String",
    required: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password must not contain the word 'password'!")
      }
    },
  },
})

const User = mongoose.model("User", userSchema)

export { User }
