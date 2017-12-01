var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SearchHistorySchema = new Schema({
    searchTerm: String,
    date: Date
})

module.exports = mongoose.model('SearchHistoryModel', SearchHistorySchema)