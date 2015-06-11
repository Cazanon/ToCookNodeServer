var recipes = [    
    {
    "id":0,
    "name": "Paella Mixta",
    "subname": "Arroz con verduras y pollo todo muy rico!",
    "category": "Arroces",
    "ingredients": [
        {
       "ingredient": "Pollo",
       "quantity": "200gr",
       "details": "Cortado en tacos"
        }, {
        "ingredient": "Arroz",
        "quantity": "500gr",
        "details": "Arroz bomba"
        }
    ],
    "important": "true",
    "favourite": [
        {
        "favList": "Diario",
        }, {
        "favList": "Fines de semana",
        }
    ],
    "step": [
        {
        "number": 1,
        "sumary":"sumary del paso 1",
        "description": "hay que freir el pollo",
        "image": "img1"
        }, {
        "number": 2,
        "sumary":"sumary del paso 2",
        "description": "se añade el arroz",
        "image": "img2"
        }
    ],
    "image": "../img/fideua.jpg",
    "icon": "../img/arroz_icon.jpg"
    },
    
    {
    "id":1,
    "name": "Paella Mixta",
    "subname": "Arroz con verduras y pollo todo muy rico!",
    "category": "Arroces",
    "ingredients": [
        {
       "ingredient": "Pollo",
       "quantity": "200gr",
       "details": "Cortado en tacos"
        }, {
        "ingredient": "Arroz",
        "quantity": "500gr",
        "details": "Arroz bomba"
        }
    ],
    "important": "true",
    "favourite": [
        {
        "favList": "Diario",
        }, {
        "favList": "Fines de semana",
        }
    ],
    "step": [
        {
        "number": 1,
        "sumary":"sumary del paso 1",
        "description": "hay que freir el pollo",
        "image": "img1"
        }, {
        "number": 2,
        "sumary":"sumary del paso 2",
        "description": "se añade el arroz",
        "image": "img2"
        }
    ],
        "image": "../img/fideua.jpg",
        "icon": "../img/arroz_icon.jpg"
    },
    
    {
    "id":2,
    "name": "Paella Mixta",
    "subname": "Arroz con verduras y pollo todo muy rico!",
    "category": "Arroces",
    "ingredients": [
        {
       "ingredient": "Pollo",
       "quantity": "200gr",
       "details": "Cortado en tacos"
        }, {
        "ingredient": "Arroz",
        "quantity": "500gr",
        "details": "Arroz bomba"
        }
    ],
    "important": "true",
    "favourite": [
        {
        "favList": "Diario",
        }, {
        "favList": "Fines de semana",
        }
    ],
    "step": [
        {
        "number": 1,
        "sumary":"sumary del paso 1",
        "description": "hay que freir el pollo",
        "image": "img1"
        }, {
        "number": 2,
        "sumary":"sumary del paso 2",
        "description": "se añade el arroz",
        "image": "img2"
        }
    ],    
        "image": "../img/fideua.jpg",
        "icon": "../img/arroz_icon.jpg"
    }
];

exports.findAll = function (req, res, next) {
    res.send(recipes);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(recipes[id]);
};

exports.findByName = function (req, res, next){
	var name =req.params.name;
	for(var i=0; i<recipes.length; i++){
		if(name == recipes[i].name){
			res.send(recipes[i]);
		}
	}
};

exports.findCategoryById = function (req, res, next){
    console.log('Peticion en funcion de la categoria');
	res.send(recipes[0]);
};