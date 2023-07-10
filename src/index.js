import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import route from './routes/index.js';

const app = express();
const port = 4000;
const router = route;

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

router(app);

app.listen(port, () =>
  console.log(`Example app listening http://localhost:${port}`),
);