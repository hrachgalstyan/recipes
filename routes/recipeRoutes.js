const express = require('express');
const recipeController = require('../controllers/recipeController');
const authController = require('../controllers/authController');
const reviewRouter = require('../routes/reviewRoutes');

const router = express.Router();

// POST recipe/234das/reviews
// GET recipe/23ddsa/reviews

router.use('/:recipeId/reviews', reviewRouter);


router
  .route('/top-5-recipes')
  .get(recipeController.aliasTopRecipes, recipeController.getAllRecipes);

router
  .route('/recipe-stats')
  .get(authController.protect, authController.restrictTo('admin'), recipeController.getRecipeStats);


router
  .route('/')
  .get(recipeController.getAllRecipes)
  .post(authController.protect, authController.restrictTo('admin'), recipeController.createRecipe);

router
  .route('/:id')
  .get(recipeController.getRecipe)
  .patch(authController.protect, authController.restrictTo('admin'), recipeController.updateRecipe)
  .delete(authController.protect, authController.restrictTo('admin'), recipeController.deleteRecipe);

module.exports = router;