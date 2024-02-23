const http = require('http');
const path = require('path');

const resurser = {
    'SVENSKA 1': 'https://gymnasiesvenska.files.wordpress.com/2013/08/matris-svenska-1.pdf',
    'SVENSKA 2': 'https://gymnasiesvenska.files.wordpress.com/2013/08/matris-svenska-2.pdf',
    'SVENSKA 3': 'https://www.liber.se/plus/E471382501.pdf'
}

const requestHandler = (req, res) => {
    console.log('handling request')
    if (req.method === 'GET') {
        console.log(req.url)
        const reqURL = req.url;
        const reqRSRC = reqURL.slice('/');
        console.log(reqRSRC);
        switch (reqRSRC) {
            case '/endpoints/sv1':

                    res.writeHead(200,{
                        'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify({ 'SERVER RESPONSE' : resurser['SVENSKA 1'] }))


                break;
            case '/endpoints/sv2':

                    res.writeHead(200,{
                    'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify({ 'SERVER RESPONSE' : resurser['SVENSKA 2'] }))

                break;
            case '/endpoints/sv3':

                    res.writeHead(200,{
                    'Content-Type': 'application/json'
                    });
                    res.end(JSON.stringify({ 'SERVER RESPONSE' : resurser['SVENSKA 3'] }))

                break;
            default:

                    res.writeHead(400,{
                        'Content-Type': 'text/html'
                    });
                    res.end(JSON.stringify({ 'ERROR_MSG' : `COULD NOT FIND RESOURCE: ${reqRSRC}` }));

                break;
        }

    }

}

const app = http.createServer(requestHandler);
module.exports = app;
