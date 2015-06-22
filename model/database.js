var mongoose = require('mongoose');

//error bson:
//http://stackoverflow.com/questions/28651028/cannot-find-module-build-release-bson-code-module-not-found-js-bson
mongoose.connect('mongodb://tocook:ionictocook@ds049219.mongolab.com:49219/tocookdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection MongoDB ERROR:'));
db.once('open', function (callback){
	console.log('MongoDB Connected');
});

//Schemas
var recipeSchema = new mongoose.Schema({
	id:Number,
	name:String,
	subname:String,
	category:String,
	people:String,
	ingredients:{
			ingredient:String,
			quantity:String,
			units:String,
			details:String
		},
	steps:{
			number:Number,
			sumary:String,
			description:String
		},
	image:String,
	icon:String,
	favourite:{
			favList:String
		}
});

var categorySchema = new mongoose.Schema({
	id: Number,
	name: String,
	icon: String
});

var favListSchema = new mongoose.Schema({
	id: Number,
	name: String
});

//Models
var Recipe = mongoose.model('Recipe', recipeSchema);
var Category = mongoose.model('Category', categorySchema);
var FavList = mongoose.model('FavList', favListSchema);

//Exports
module.exports = {
		Recipe : Recipe,
		Category: Category,
		FavList : FavList
}