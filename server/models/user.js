import mongoose from "mongoose"
import validator from "validator"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config"

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
    trim: true,
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
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password must not contain the word 'password'!")
      }
    },
  },
  token: {
    type: "String",
    required: true,
  },
})

userSchema.pre("save", async function (next) {
  const user = this

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
  user.token = token
  await user.save()
  return token
}

const User = mongoose.model("User", userSchema)

export { User }
