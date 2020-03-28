require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');


mongoose
  .connect('mongodb://localhost/upload-app', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


const Multer = require('multer');
const Image = require('./models/image')
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')

const s3 = new aws.S3();

const uploader = new Multer({
  // dest: 'uploads/'
  storage: multerS3({
    s3: s3,
    bucket: 'ironhack-wdpt',
    acl: 'public-read',
    key: function(req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

app.get('/upload', (req, res, next) => {
  res.render('upload')
})

app.post('/upload', uploader.single('image'), (req,res,next)=> {
  console.log(req.body)
  console.log(req.file)


  Image.create({
    title: req.body.title,
    description: req.body.description,
    image: req.file.location
  })
  .then(image => console.log('image created:', image))
  .catch(err => console.log(err))


  res.json(req.file)

})

app.get('/images', (req, res, next) => {

  Image.find()
    .then(images => {
      res.render('images', {images})
    })
})

module.exports = app;
