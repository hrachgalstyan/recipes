const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const recipeRouter = require(`${__dirname}/routes/recipeRoutes`);
const userRouter = require(`${__dirname}/routes/userRoutes`);
const reviewRouter = require(`${__dirname}/routes/reviewRoutes`);
const viewRouter = require(`${__dirname}/routes/viewRoutes`);

const app = express();

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES
// Serving static files
// app.use(express.static(path.join(__dirname, 'public')));

// SET SECURITY HTTP HEADERS
app.use(helmet());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// LIMIT REQUESTS FROM SAME API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP. Please try again in an hour.',
});
app.use('/api', limiter);
// Body parser, reading data from body into req.body
app.use(
  express.json({
    limit: '50kb',
  })
);
app.use(express.urlencoded({
  extended: true,
  limit: '10kb'
}));
app.use(cookieParser());

// Data sanitization against NOSQl query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parametr pollution
app.use(
  hpp({
    whitelist: ['rating', 'price'],
  })
);

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Routes
// app.use('/', viewRouter);
app.use('/api/v1/recipes', recipeRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);

app.use(express.static('client/build'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;