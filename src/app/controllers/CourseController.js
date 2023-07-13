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
  create(req, res, next) {
    res.render("courses/create");
  }

  //[POST] /courses/store
  store(req, res, next) {
    req.body.image = `https://i.ytimg.com/vi/${formData.videoId}/hq720.jpg`;
    const course = new Course(req.body);
    course
      .save()
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => next(error));
  }

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render("courses/edit", { course: mongooseToObj(course) })
      )
      .catch((error) => next(error));
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch((error) => next(error));
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.delete({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }

  //[DELETE] /courses/:id/force
  forceDelete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }

  //[PATCH] /courses/:id/restore
  restore(req, res, next) {
    Course.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch((error) => next(error));
  }

  //[POST] /courses/handle-form-actions
  handleFormActions(req, res, next) {
    switch (req.body.action) {
      case "delete":
        Course.delete({ _id: { $in: req.body.courseIds } })
          .then(() => res.redirect("back"))
          .catch((error) => next(error));
      default:
        res.json({ message: "Action is invalid" });
    }
  }
}

export default new CourseController();
