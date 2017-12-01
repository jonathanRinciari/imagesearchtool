var googleImages = require('google-images')
const client = new googleImages('process.env.GS_CX', 'process.env.GS_KEY')

exports.api_index = function(req, res){
    res.send('testing')
};

exports.image_search = function(req, res){
    client.search(req.params.query)
        .then(images => {
            console.log(images[0])
        })
        .catch(err){
            console.log(err)
        }
}

exports.search_history = function(req, res){
    res.send('returning latest searches')
}

exports.search_redirect = function(req, res){
    res.redirect('/api')
}