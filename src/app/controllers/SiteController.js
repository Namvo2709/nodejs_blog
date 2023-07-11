import Course from "../models/Course.js";
import { multipleMongooseToObj } from "../../util/mongoose.js";

class SiteController {
  //[GET] /
  async home(req, res, next) {
    try {
      let courses = multipleMongooseToObj(await Course.find({}));
      // courses = courses.map((course) => course.toObject());
      res.render("home", { courses });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

export default new SiteController();
