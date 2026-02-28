import mongoose, { Schema } from "mongoose";
import aggregatePaginate from "mongoose-aggregate-paginate/lib/mongoose-aggregate-paginate";
// import bcrypt from "bcrypt";
// import jsonwebtoken from "jsonwebtoken";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    duration: {
      type: String,
    },
    views: {
      type: String,
      default: 0,
    },
    isPublished: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

videoSchema.plugin(aggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
