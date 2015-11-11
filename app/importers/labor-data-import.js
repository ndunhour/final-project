var mongoose = require('mongoose');
var fs = require('fs');

// Require the keyword list thats stored in the db
var associatedKeywordsList = require('/db/associatedKeywords');

//read file from local disk
var nationalSalary = ('/OutsideData/national_M2014_dl.xlsx');

//massage data
var SalaryData = mongoose.model('salaryData', salaryData);

SalaryData.
  find({
    year : 2014,
    categoryId : 'occ_code', // if doesnt work use caps
    categoryTitle : 'occ_title',
    associatedKeywords : associatedKeywordsList,
    annualMediumWage : 'a_mean',
    states : {
      name : 'st',
      abbreviation :  [
                        'AL', 'AK', 'AZ', 'AR', 'CA',
                        'CO', 'CT', 'DE', 'DC', 'FL',
                        'GA', 'GU', 'HI', 'ID', 'IL',
                        'IN', 'IA', 'KS', 'KY', 'LA',
                        'ME', 'MD', 'MA', 'MI', 'MN',
                        'MS', 'MO', 'MT', 'NE', 'NV',
                        'NH', 'NJ', 'NM', 'NY', 'NC',
                        'ND', 'OH', 'OK', 'OR', 'PA',
                        'PR', 'RI', 'SC', 'SD', 'TN',
                        'TX', 'UT', 'VT', 'VI', 'VA',
                        'WA', 'WV', 'WI', 'WY'
                      ]
  }
}

//populate model
// push to the model?

//save to database
// pushing to database