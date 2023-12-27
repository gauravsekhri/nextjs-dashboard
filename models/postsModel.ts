import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: [true, "Please provide postId."],
    },
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
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Posts = mongoose.models.posts || mongoose.model("posts", userSchema);

export default Posts;
