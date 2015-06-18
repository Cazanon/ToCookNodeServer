var express = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
	recipes 		= require('./routes/recipes'),
	//mongoose 		= require('mongoose'),
    app = express();

//error bson:
//http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson
//mongoose.connect('mongodb://tocook:ionictocook@ds049219.mongolab.com:49219/tocookdb');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride());      // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/recipes', recipes.findAll);
app.get('/recipes/category/:category', recipes.findByCategory);
app.get('/recipes/categories', recipes.findAllCategories);
app.get('/recipes/:id', recipes.findById);


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});