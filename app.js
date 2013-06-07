/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , Jamendo = require('jamendo')
  , path = require('path')
  , $ = require('jquery')
  , gm = require('googlemaps');


var app = express();

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.favicon(__dirname + '/public/favicon.ico')); 
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var jamendo = new Jamendo({
 client_id : '1f370d8e',    // Specify your client_id
                           // see http://developer.jamendo.com/v3.0#obtain_client_id
 protocol  : 'http',        // HTTP protocol to use, http or https
 version   : 'v3.0',        // Use the specified API version
 debug     : false         // Print the whole response object and body in the console
});

gm.config({key: "AIzaSyA6KF1e00jijd0fiY_IfN4dciCUwXU8nT4"});

app.get('/', function(req, res){
  res.render('index', {getData: false, title: "Jamenco"});
  res.send();
});

app.get('/city/:id', function(req, res){
  res.render('index', {getData: req.params.id, title: "Jamenco"});
});

app.get('/test', function(req, res){
  
  jamendo.concerts({ limit: 100, datebetween: [ new Date(), '2013-10-10' ], location_city: 'paris', order: 'date_desc'}, function(error, concerts){
      res.render('test', {concerts: concerts.results});
  });
});

app.get('/concert/:id', function(req, res){
  res.render('index', {getData: req.params.id, title: "Jamenco"});
});

app.get('/getTracks/:id', function(req, res){
    jamendo.tracks({ artist_id: req.params.id, limit: 5, order: 'popularity_total'}, function(error, tracks){
      res.json(tracks.results)
    });
});

app.get('/getConcerts/:id', function(req, res){
    var id = req.params.id;
    if (parseInt(id) == id) {
      jamendo.concerts({ id: id}, function(error, concerts){
        res.json(concerts.results);
      });
    } else {
      jamendo.concerts({ limit: 100, datebetween: [ new Date(), '2013-10-10' ], location_city: req.params.id, order: 'date_desc'}, function(error, concerts){
        res.json(concerts.results);
      });
    }
});

app.get('/getCities/', function(req, res){
  jamendo.concerts({ limit: 100, datebetween: [ new Date(), '2013-10-10' ], order: 'date_desc'}, function(error, concerts){
      var cities = new Object();
      for (var i = 0; i < concerts.results.length; i++) {
        var cityname=$.trim(concerts.results[i].location_city.toLowerCase());
        if(cities[cityname]) cities[cityname]++;
        else cities[cityname]=1;
      };
      res.json(cities);
  });
});

var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
