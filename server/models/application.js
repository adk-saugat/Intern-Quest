import mongoose from "mongoose"

const applicationSchema = new mongoose.Schema(
  {
    companyName: {
      type: "String",
      required: true,
      trim: true,
    },
    position: {
      type: "String",
      required: true,
      trim: true,
    },
    status: {
      type: "String",
      trim: true,
      enum: ["applied", "in progress", "rejected", "accepted"],
      default: "applied",
    },
    notes: {
      type: "String",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

const Application = mongoose.model("Application", applicationSchema)

export { Application }
