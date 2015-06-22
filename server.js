var express 		= require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    cors 			= require('cors');
	recipes 		= require('./routes/recipes'),
	mongoose 		= require('mongoose'),
    app = express();

//error bson:
//http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson
mongoose.connect('mongodb://tocook:ionictocook@ds049219.mongolab.com:49219/tocookdb');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride());      
app.use(cors());

/*middleware example:
 * 
 * app.use(function(req, req, next) {
	// hacer y terminar
	// hacer y delegar (next();)
});
*/

app.get('/recipes', recipes.findAll);

app.get('/recipes/category/:category', recipes.findByCategory);
app.get('/recipes/categories', recipes.findAllCategories);

app.get('/recipes/favourite/:favList', recipes.findByFavList);
app.get('/recipes/favourites', recipes.findAllFavList);

app.get('/recipes/:id', recipes.findById);


app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

/*
{
	status: 200,
	data: {...},
	error: {}
}
*/

app.use(function(err, req, res, next){
	res.json({
		status: 504
	});
});
