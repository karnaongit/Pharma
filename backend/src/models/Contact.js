import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      enum: [
        "product-inquiry",
        "partnership",
        "support",
        "distribution",
        "feedback",
        "other",
      ],
    },
    message: {
      type: String,
      required: true,
      minlength: 10,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
