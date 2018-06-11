
var https = require('https');

function getAndPrintHTMLChunks () {
    var reqeustOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };
    https.get(reqeustOptions, function(response) {
        response.setEncoding('utf-8');
        response.on('data', function(data) {
            console.log( data, "\n");
        });
    });

}

