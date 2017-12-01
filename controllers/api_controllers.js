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
    var start = req.query.offset
    var cx = process.env.GS_CX;
    var key = process.env.GS_KEY;
    var url = `${apiEndpoint}${key}&cx=${cx}&searchType=image&q=${q}&start=${start}`
    
    var requestObject = {
        uri: url,
        method: 'GET',
        timeout: 10000
    }
    
    request(requestObject, function(err, response, body){
        if(err) throw err;
        else {
            var d = new Date();
            var searchDate = d.toJSON();
            var historyObj = new History ({
                searchTerm: q,
                date: searchDate
            })
            historyObj.save(function(err){
                if(err) throw err;
                console.log('Saved')
            })
            var search = [];
            var result = JSON.parse(body)
            var imageList = result.items
            for(var i = 0; i < imageList.length; i++){
                var images = {
                    "url": imageList[i].link,
                    "snippet": imageList[i].snippet,
                    "thumbnail":imageList[i].image.thumbnailLink,
                    "context": `http://${imageList[i].displayLink}`
                }
                search.push(images);
            }
            res.send(search)
        }
    })
    
    
}

exports.search_history = function(req, res){
    res.send('returning latest searches')
}

exports.search_redirect = function(req, res){
    res.redirect('/api')
}