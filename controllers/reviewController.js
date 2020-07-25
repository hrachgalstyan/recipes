const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');

exports.setRecipeUserIds = (req, res, next) => {
    // Allow nested routes
    if (!req.body.recipe) req.body.recipe = req.params.recipeId;
    if (!req.body.user) req.body.user = req.user.id;
    next();
}

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.createReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);