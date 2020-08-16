const Recipe = require('../models/recipeModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getOverview = catchAsync(async (req, res) => {
  // 1) Get recipe data from collection
  const recipes = await Recipe.find();
  // 2) Build template
  // 3) Render that template using our data from 1
  res.status(200).render('overview', {
    title: 'All Recipes',
    recipes
  });
});

exports.getRecipe = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested recipe
  const recipe = await Recipe.findById(req.params.id).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  if (!recipe) {
    return next(new AppError('There is no recipe with that name.', 404));
  }

  res.status(200).render('recipe', {
    title: `${recipe.name}`,
    recipe
  });
});

exports.getLoginForm = catchAsync(async (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
});

exports.getSignUpForm = catchAsync(async (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign up',
  });
});

exports.getAccount = catchAsync(async (req, res) => {
  res.status(200).render('account', {
    title: 'My account',
  });
});

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id, {
      name: req.body.name,
      email: req.body.email
    }, {
      new: true,
      runValidators: true,
      useFindAndModify: false
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
})