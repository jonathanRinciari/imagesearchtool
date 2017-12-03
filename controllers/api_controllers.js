var request = require('request');
var History = require('../model/historyModel')
var moment = require('moment');
moment().format()


exports.api_index = function(req, res){
    res.render('apiview', { title: 'Image Search Abstration Service' });
};

exports.image_search = function(req, res){
    console.log('test')
    var apiEndpoint = 'https://www.googleapis.com/customsearch/v1?key=';
    var q = req.params.query;
    var start = req.query.offset
    var cx = process.env.GS_CX;
    var key = process.env.GS_KEY;
    var url; 
    if(req.query.offset != undefined){
        url = `${apiEndpoint}${key}&cx=${cx}&searchType=image&q=${q}&start=${start}`
    } else {
        url = `${apiEndpoint}${key}&cx=${cx}&searchType=image&q=${q}`
    }
    
    var requestObject = {
        uri: url,
        method: 'GET',
        timeout: 10000
    }
    
    request(requestObject, function(err, response, body){
        console.log(body)
        if(err) throw err;
        else {
            var d = moment();
            d = d.format('MM-DD-YYYY HH:MM')
            var historyObj = new History ({
                searchTerm: q,
                date: d
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
    var queryRes = History.find({}, {_id: 0, __v: 0});
    queryRes.limit(10);
    queryRes.sort({date: -1})
    queryRes.exec(function(err, history){
        if(err) throw err;
        res.send(history)
    })
}

exports.search_redirect = function(req, res){
    res.redirect('/api')
}