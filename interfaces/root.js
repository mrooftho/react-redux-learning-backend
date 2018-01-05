function root(){
    return {
        version
    };
    function version(req, res) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ 'version': '1.0.0' }));
    }
}
module.exports = root;