var express = require('express');
var app = express();
var path = require('path');

app.set('port', 8080);
app.use(express.static(path.join(__dirname)));
app.listen(app.get('port'), function () {
    console.log('port: ', app.get('port'));
});
