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
  .connect('mongodb://localhost/fileuploadexample', {useNewUrlParser: true})
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


const aws = require('aws-sdk')
const multer = require('multer')
const image = require('./models/image')

/**
 * ITERATION 1 upload to folder 
 */

const uploader = new multer({
  dest: 'uploads/'
})


/**
 * ITERATION 3 upload to S3
 */

const multerS3 = require('multer-s3')

var s3 = new aws.S3()


var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'ironhack-wdpt',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

app.post('/upload', upload.single('image'), (req, res, next) => {
  console.log(req.file)
  image.create({
    name: req.body.name,
    description: req.body.description,
    image: req.file.location
  })
  .then(img => {
    res.send(img)
  })
  .catch(e => {
    next(e)
  })
})

app.get('/upload', (req, res, next) => {
  res.render('upload')
})

module.exports = app;
