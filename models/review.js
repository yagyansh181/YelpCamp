
// Importing mongoose module
const mongoose = require('mongoose');

// Creating a Schema object
const Schema = mongoose.Schema;

// Defining a new schema for reviews
const reviewSchema = new Schema({

    // The body of the review, a string
    body: String,

    // The rating of the review, a number between 1 and 5
    rating: Number
})

// Creating a model named 'Review' using the reviewSchema
module.exports = mongoose.model('Review', reviewSchema);
//
//In this code, we are defining a schema for reviews in a MongoDB database using mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.
//
//The review schema includes two fields:
//
//1. `body`: A string that represents the body of the review.
//2. `rating`: A number that represents the rating of the review, which should be between 1 and 5.
//
//Finally, we export the model as 'Review' so that it can be used in