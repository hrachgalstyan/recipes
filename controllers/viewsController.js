const Recipe = require('../models/recipeModel');
const catchAsync = require('../utils/catchAsync');

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

exports.getRecipe = catchAsync(async (req, res) => {
  // 1) Get the data, for the requested recipe
  const recipe = await Recipe.findById(req.params.id).populate({
    path: 'reviews',
    fields: 'review rating user'
  });

  res.status(200).render('recipe', {
    title: 'Ելակով տորթ',
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
})