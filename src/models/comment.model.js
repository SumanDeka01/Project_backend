import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema({
  content: {
    type: String,
  },
});

export const Comment = mongoose.model("Comment", commentSchema);
