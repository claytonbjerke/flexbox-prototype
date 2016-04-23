var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8080));
app.use(express.static(path.join(__dirname, 'src')));
app.listen(app.get('port'), function () {
    console.log('port: ', app.get('port'));
});
