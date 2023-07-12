import Course from "../models/Course.js";
import { multipleMongooseToObj } from "../../util/mongoose.js";

class MeController {
  // [GET] //stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/storedCourses", {
          courses: multipleMongooseToObj(courses),
        })
      )
      .catch((err) => next(err));
  }
}

export default new MeController();
