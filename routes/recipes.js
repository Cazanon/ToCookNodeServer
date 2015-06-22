var db = require('../model/database');

exports.findAll = function (req, res, next) {
	console.log('Find All Recipes');
	db.Recipe.find().lean().sort('name').exec(function(err, recipes) {
		if(err) return console.error(err);
		console.log(recipes.length + ' recipes found');
		recipes = recipes.map(function(recipe){
			  return recipe;
	    });		
		res.send(recipes);
	});
};

exports.findById = function (req, res, next) {
	console.log('Find Recipe by Id ' + req.params.id);	
	db.Recipe.findOne({id : req.params.id}).lean().exec(function(err, recipe) {
		if(err) return console.error(err);
		console.log('Recipe found: ' + recipe.name);
		res.send(recipe);
	});
};

exports.findAllCategories = function (req, res, next) {
	console.log('Find All Categories');
	db.Category.find().lean().sort('name').exec(function(err, categories){
		  if(err) return console.error(err);
		  console.log(categories.length + ' categories found');
		  categories = categories.map(function(category){
			  return category;
	      });
		  res.send(categories);
	});
};

exports.findByCategory = function (req, res, next) {
    console.log('Find Recipes by Category ' + req.params.category);    
	db.Recipe.find({category : req.params.category}).lean().sort('name').exec(function(err, recipes){
		  if(err) return console.error(err);
		  console.log(recipes.length + ' recipes found');
		  recipes = recipes.map(function(recipe){
			  return recipe;
		  });		
		  res.send(recipes);
	});
};

exports.findAllFavList = function (req, res, next) {
	console.log('Find All FavLists');
	db.FavList.find().lean().sort('name').exec(function(err, favList){
		  if(err) return console.error(err);
		  console.log(favList.length + ' favList found');
		  favList = favList.map(function(favList){
			  return favList;
	      });
		  res.send(favList);
	});
};

exports.findByFavList = function (req, res, next) {
    console.log('Find Recipes by FavList ' + req.params.favList);    
	db.Recipe.find({favList : req.params.favList}).lean().sort('name').exec(function(err, recipes){
		  if(err) return console.error(err);
		  console.log(recipes.length + ' recipes found');
		  recipes = recipes.map(function(recipe){
			  return recipe;
		  });		
		  res.send(recipes);
	});
};