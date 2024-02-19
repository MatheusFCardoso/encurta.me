import express, { Express } from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';

import MongoStore from 'connect-mongo';
import mongoose, { ConnectOptions } from 'mongoose';

import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import homeRouter from './routes/urlRouter';

const sessionOptions = session({
  secret: 'sdasfsslkdslkdflkdflkdfdslfkfdldfdkl',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

class App {
  public app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.set();
    this.connect();
  }

  connect() {
    mongoose
      .connect(process.env.CONNECTION_STRING!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions)
      .then(() => {
        console.log('\nconectado com a base de dados');
        this.app.emit('pronto');
      })
      .catch((err) => console.log(err));
    }

  middlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
    this.app.use(sessionOptions)
  }

  routes() {
    this.app.use('/', homeRouter);
  }

  set() {
    this.app.set('views', path.resolve(__dirname, '..', 'views'));
    this.app.set('view engine', 'ejs');
  }

}

export default new App().app;
