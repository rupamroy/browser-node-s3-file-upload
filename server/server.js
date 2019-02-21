var fs = require('fs');
var path = require('path');
const serveStatic=require('serve-static');
var express = require('express');
const AWS = require('aws-sdk');

const s3 = new AWS.S3();

var app = express();

var rootPath = path.normalize(__dirname + '/../');

app.use(serveStatic(rootPath + '/web'));

app.post('/upload', function (req, res, next) {
    const params = {
        Bucket: 'rupam-bucket-1', // pass your bucket name
        Key: getFileName(req), // Should be the name of the file in the content-disposition header , this needs to be fixed in the web index.html
        Body: req
    };
    s3.upload(params, function (s3Err, data) {
        if (s3Err) {
            res.status(500).send(s3Err);
        }
        console.log(`File uploaded successfully at ${data.Location}`)
        res.send(200);
    });

});


app.listen(3000);


function getFileName(req) {
    var cdHeader = req.headers['content-disposition'];
    return cdHeader.substring(cdHeader.indexOf('=') + 1, cdHeader.length);
}