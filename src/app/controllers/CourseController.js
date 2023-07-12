import Course from "../models/Course.js";
import { mongooseToObj } from "../../util/mongoose.js";

class CourseController {
  //[GET] /courses/:slug
  async detail(req, res, next) {
    try {
      let course = mongooseToObj(
        await Course.findOne({ slug: req.params.slug })
      );
      res.render("courses/detail", { course });
    } catch (error) {
      next(error);
    }
  }

  //[GET] /courses/create
  async create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  async store(req, res, next) {
    const formData = req.body;
    formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hq720.jpg`;
    const course = new Course(formData);
    course
      .save()
      .then(() => res.redirect("/"))
      .catch((error) => next(error));
  }

  //[GET] /courses/:id/edit
  async edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObj(course) })
      )
      .catch((error) => next(error));
  }

  //[PUT] /courses/:id
  async update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => next(error));
  }

  //[DELETE] /courses/:id
  async delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }
}

export default new CourseController();
