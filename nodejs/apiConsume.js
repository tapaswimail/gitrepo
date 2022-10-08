//https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/
//https://dev.to/isalevine/three-ways-to-retrieve-json-from-the-web-using-node-js-3c88
//https://github.com/public-apis/public-apis

const request = require('request');

//let url = "https://www.reddit.com/r/popular.json";
let url = "https://poetrydb.org/random";


let options = {json: true};

request(url, options, (error, res, body) => {
    if (error) {
        return  console.log(error)
    };

    if (!error && res.statusCode == 200) {
        // do something with JSON, using the 'body' variable
        console.log(body);
    };
});
