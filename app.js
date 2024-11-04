var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
var flash = require(`connect-flash`);
const MongoStore = require('connect-mongo');
const passport = require('passport');
const indexRouter = require('./routes/index');
const usersRouter = require("./routes/users")
require("dotenv").config();



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "syed samad ali",
    cookie: { maxAge: 2 * 60 * 60 * 1000 },
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://samadali0125:Samad%40123@cluster0.m1ac8d5.mongodb.net/VisionBoard?retryWrites=true&w=majority&appName=Cluster0",
        autoRemove: 'disabled'
    }),

}))



app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.all("*", (req, res) => {
    res.status(404).render("page")
})



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404, 'Route not found'));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use(function(err, req, res, next) {
    // Custom JSON error response
    res.status(err.status || 500).json({
        success: false,
        message: "Something went wrong"
    });
});



module.exports = app;