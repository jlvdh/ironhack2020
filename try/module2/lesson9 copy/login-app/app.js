require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const Mongostore   = require('connect-mongo')(session)
const passport     = require('./authentication/passport')
const flash        = require('connect-flash')
// passport.serializeUser((user, callback) => {
//   callback(null, user._id);
// });

// passport.deserializeUser((id, callback) => {
//   User.findById(id)
//     .then(user => {
//       callback(null, user);
//     })
//     .catch(error => {
//       callback(error);
//     });
// });

// passport.use(
//   new LocalStrategy((username, password, callback) => {
//     User.findOne({ username })
//       .then(user => {
//         if (!user) {
//           return callback(null, false, { message: 'Incorrect username' });
//         }
//         if (!bcrypt.compareSync(password, user.password)) {
//           return callback(null, false, { message: 'Incorrect password' });
//         }
//         callback(null, user);
//       })
//       .catch(error => {
//         callback(error);
//       });
//   })
// );


mongoose
  .connect('mongodb://localhost/login-app', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(session({
  secret: process.env.SESSION_SECRET,
  store: new Mongostore({
    mongooseConnection: mongoose.connection
  })
}))

// Middleware Setup
app.use(flash())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());


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



const index = require('./routes/index');
app.use('/', index);

const authRouter = require('./routes/auth')
app.use('/auth', authRouter)

const roomRouter = require('./routes/room')
app.use('/room', roomRouter)

module.exports = app;
