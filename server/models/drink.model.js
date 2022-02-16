const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: false,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const drinkSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  ingredients: {
    type: String,
    required: true,
  },
  instructions: {
    type: String,
    required: true,
  },
  comments: [commentSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model("Drink", drinkSchema);