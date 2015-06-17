exports.findAll = function (req, res, next) {
	console.log('Find All Recipes');
	res.send(req.db.get('recipes'));
    //res.send(recipes);
};

exports.findById = function (req, res, next) {
	console.log('Find Recipe by Id');
    var id = req.params.id;
    res.send(recipes[id]);
};

exports.findByCategory = function (req, res, next) {
    console.log('Find Recipes by Category');
	var category = req.params.category;
	var recipesCategory = [];
	for(var i=0; i<recipes.length; i++){
		if(category == recipes[i].category){
			recipesCategory.push(recipes[i]);			
		}
	}
	res.send(recipesCategory);
};

exports.findAllCategories = function (req, res, next) {
	console.log('Find All Categories');
    res.send(categories);
};