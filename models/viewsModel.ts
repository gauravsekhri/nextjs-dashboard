import mongoose from "mongoose";

const viewSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      required: [true, "Please provide postId."],
    },
    viewsData: {
      type: [],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Views = mongoose.models.views || mongoose.model("views", viewSchema);

export default Views;
