var express    = require('express');
var bodyParser = require('body-parser');

//var logger     = require('morgan')

var app = express()

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded( {
  extended: true
}));
app.use(bodyParser.json());

app.get('*', function (req, res) {
  res.render('index.html');
});

//app.use(bodyParser.json())
//app.use(logger('dev'))
//app.use(require('./controllers'))

var server = app.listen(3000, function () {
  console.log('server listening on %d', server.address().port)
})

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/social', function () {
  console.log('mongodb connected')
})
