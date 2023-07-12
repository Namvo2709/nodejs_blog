import mongoose from "mongoose";
// const slug = require('mongoose');
import slugGenerator from "mongoose-slug-generator";
mongoose.plugin(slugGenerator);

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: "name" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", Course);
