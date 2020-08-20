const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const User = require('./userModel');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Բաղադրատոմսը պետք է ունենա անուն։'],
    unique: true,
    trim: true,
    maxLength: [40, 'Բաղադրատոմսը պետք է ունենա ավելի քիչ կամ հավասար, քան 40 նիշ։'],
    minLength: [5, 'Բաղադրատոմսը պետք է ունենա ավելի քան կամ հավասար, քան 5 նիշ։'],
    // validate: [
    //   validator.isAlpha,
    //   'Recipe name must only contains letters',
    // ],
  },
  image: String,
  slug: String,
  ratingsAverage: {
    type: Number,
    default: 4.5,
    min: [1, 'Վարկանիշը պետք է մեծ լինի 1.0-ից'],
    max: [5, 'Վարկանիշը պետք է փոքր լինի 5.0-ից'],
    set: val => Math.round(val * 10) / 10,
  },
  ratingsQuantity: Number,
  time: {
    type: Number,
    required: [true, 'Բաղադրատոմսը պետք է պարունակի պատրաստման ժամանակ։'],
  },
  people: {
    type: Number,
    required: [true, 'Բաղադրատոմսը պետք է պարունակի մարդկանց թիվ։']
  },
  difficulty: {
    type: String,
    required: [true, 'Բաղադրատոմսը պետք է պարունակի բարդություն։'],
    enum: {
      values: ['Հեշտ', 'Բարդ', 'Դժվար'],
      message: 'Բարդությունը ներառում է: Հեշտ, Բարդ, Դժվար',
    },
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  ingredients: [String],
  description: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});

// VIRTUAL POPULATE
recipeSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'recipe',
  localField: '_id'
})

// QUERY MIDDLEWARE
recipeSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'author',
    select: '-__v -passwordChangedAt'
  });
  next();
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
recipeSchema.pre('save', function (next) {
  this.populate({
    path: 'author',
    select: '-__v -passwordChangedAt'
  });
  this.slug = slugify(this.name, {
    lower: true,
  });
  next();
});

recipeSchema.pre('save', async function (next) {
  this.author = await User.findById(this.author);
  // this.author = await Promise.find(authors);
  next();
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;