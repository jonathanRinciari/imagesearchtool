var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SearchHistorySchema = new Schema({
    searchTerm: String,
    date: String
})

module.exports = mongoose.model('SearchHistoryModel', SearchHistorySchema)