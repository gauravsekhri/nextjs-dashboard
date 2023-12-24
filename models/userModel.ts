import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please provide fullname."],
    },
    email: {
      type: String,
      required: [true, "Please provide email."],
    },
    password: {
      type: String,
      default: "",
    },
    organization: {
      type: String,
      default: "",
    },
    avatarUrl: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    psdModifiedAt: {
      type: Date,
      default: Date.now,
    },
    latestOTP: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
