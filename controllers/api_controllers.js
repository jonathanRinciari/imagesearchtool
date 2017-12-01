

exports.api_index = function(req, res){
    res.send('testing')
};

exports.image_search = function(req, res){
}

exports.search_history = function(req, res){
    res.send('returning latest searches')
}

exports.search_redirect = function(req, res){
    res.redirect('/api')
}