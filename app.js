var express = require('express')
var app = express()

app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/template');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', { title: 'node-kit', h1: 'Welcome to use node-kit for your new web project!' });
})

var server = app.listen(2333, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('node-kit is listening at http://%s:%s', 'localhost', port)

})