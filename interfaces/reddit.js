function reddit(){
    return {
        subreddits,posts
    };
    function subreddits(req, res) {
        var httpRequest = require('request-promise');
        var opt = {
            uri: 'https://www.reddit.com/subreddits/default.json',
            timeout: 5000,
            json: true,
            resolveWithFullResponse: true
        };
        httpRequest(opt).then((rsp)=>{
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(rsp.body);
        })        
    }

    function posts(req,res) {

        var httpRequest = require('request-promise');
        var opt = {
            uri: `https://www.reddit.com${req.params[0]}`,
            timeout: 5000,
            json: true,
            resolveWithFullResponse: true
        };
        httpRequest(opt).then((rsp)=>{
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin','*');
            res.send(rsp.body);
        })


    }
}
module.exports = reddit;