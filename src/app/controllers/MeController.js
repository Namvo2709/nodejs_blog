import Course from "../models/Course.js";
import { multipleMongooseToObj } from "../../util/mongoose.js";

class MeController {
  // [GET] /stored/courses
  storedCourses(req, res, next) {
    Promise.all([
      Course.find({}),
      Course.countDocumentsWithDeleted({ deleted: true }),
    ])
      .then(([courses, amoutDeletedRecords]) => {
        res.render("me/storedCourses", {
          amoutDeletedRecords,
          courses: multipleMongooseToObj(courses),
        });
      })
      .catch((err) => {
        next(err);
      });
  }

  // [GET] /trash/courses
  trashCourses(req, res, next) {
    Course.findWithDeleted({ deleted: true })
      .then((deletedCourses) =>
        res.render("me/trash", {
          deletedCourses: multipleMongooseToObj(deletedCourses),
        })
      )
      .catch((err) => next(err));
  }
}

export default new MeController();
