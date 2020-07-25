const Recipe = require('../models/recipeModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.aliasTopRecipes = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-rating,price';
  req.query.fields = 'name,price,rating';
  next();
};

exports.getAllRecipes = factory.getAll(Recipe);
exports.getRecipe = factory.getOne(Recipe, {
  path: 'reviews'
});
exports.createRecipe = factory.createOne(Recipe);
exports.updateRecipe = factory.updateOne(Recipe);
exports.deleteRecipe = factory.deleteOne(Recipe);

exports.getRecipeStats = catchAsync(async (req, res, next) => {
  const stats = await Recipe.aggregate([{
      $match: {
        rating: {
          $gte: 4.5,
        },
      },
    },
    {
      $group: {
        _id: null,
        numRecipes: {
          $sum: 1,
        },
        avgRating: {
          $avg: '$rating',
        },
        avgPrice: {
          $avg: '$price',
        },
        minPrice: {
          $min: '$price',
        },
        maxPrice: {
          $max: '$price',
        },
      },
    },
  ]);
  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});