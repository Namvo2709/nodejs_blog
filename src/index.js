import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import route from "./routes/index.js";
import { connect } from "./config/db/index.js";
import MethodOverride from "method-override";

const app = express();
const port = 4000;
const router = route;

connect();

app.use(express.static("src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

app.use(MethodOverride("_method"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "src/resources/views");

router(app);

app.listen(port, () => console.log(`App listening http://localhost:${port}`));
