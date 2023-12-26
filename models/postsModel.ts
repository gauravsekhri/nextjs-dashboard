import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title."],
    },
    description: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      required: [true, "Please provide content."],
    },
    createdBy: {
      type: String,
      default: "",
    },
    isPublished: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.models.posts || mongoose.model("posts", userSchema);

export default Posts;