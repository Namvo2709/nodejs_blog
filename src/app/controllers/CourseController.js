import Course from "../models/Course.js";
import { mongooseToObj } from "../../util/mongoose.js";

class CourseController {
  //[GET] /courses/:slug
  async detail(req, res, next) {
    try {
      let course = mongooseToObj(await Course.findOne({slug:req.params.slug}));
      res.render('courses/detail',{course});
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    res.render('courses/create')
  }

  async store(req, res, next) {
    const formData =  req.body;
    formData.image = `https://i.ytimg.com/vi/${formData.videoId}/hq720.jpg`
    const course = new Course(formData)
    course.save()
      .then(() => res.redirect('/courses/'))
      .catch(error => next(error));
  }
}

export default new CourseController();
