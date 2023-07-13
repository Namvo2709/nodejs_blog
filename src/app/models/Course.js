import mongoose from "mongoose";
import slugGenerator from "mongoose-slug-generator";
import MongooseDelete from "mongoose-delete";

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

// add plugin
mongoose.plugin(slugGenerator);
Course.plugin(MongooseDelete, { overrideMethods: "all", deletedAt: true });

export default mongoose.model("Course", Course);
