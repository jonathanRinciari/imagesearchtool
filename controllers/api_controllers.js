var request = require('request');
var History = require('../model/historyModel')
var moment = require('moment');
moment().format()
exports.api_index = function(req, res){
    res.send('testing')
};

exports.image_search = function(req, res){


    var apiEndpoint = 'https://www.googleapis.com/customsearch/v1?key=';
    var q = req.params.query;
    var cx = process.env.GS_CX;
    var key = process.env.GS_KEY;
    var url = `${apiEndpoint}${key}&cx=${cx}&searchType=image&q=${q}&start=10`
    
    var requestObject = {
        uri: url,
        method: 'GET',
        timeout: 10000
    }
    
    request(requestObject, function(err, response, body){
        if(err) throw err;
        else {
            var d = new Date();
            var historyObj = {
                searchTerm: q,
                date: d
            }
            History.save(historyObj, function(err){
                if(err) throw err;
            })
        }
    })
    
    
}

exports.search_history = function(req, res){
    res.send('returning latest searches')
}

exports.search_redirect = function(req, res){
    res.redirect('/api')
}