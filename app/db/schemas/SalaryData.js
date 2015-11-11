var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema
var salaryData = new Schema({
  year: Number,
  categoryId: String,
  categoryTitle:  String,
  associatedKeywords: [String],
  states:{
    name: String,
    abbreviation: String,
    //state specific salaray data fields
  }
  date: { type: Date, default: Date.now }
});
