var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var options = {connectTimeoutMS: 5000, useNewUrlParser: true };

mongoose.connect('mongodb://ludovic:69Azerty@ds249873.mlab.com:49873/vendredi', 
    options,         
    function(err) {
     console.log(err);
    }
);
 var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    age: Number,
    email: String
});
var UserModel = mongoose.model('users', userSchema); 


/* GET home page. */
router.get('/', function(req, res, next) {
			console.log(req.body);
		var newUser = new UserModel ({
		 lastName: "Vanessa", 
		 firstName: "Paradis", 
		 age: "38", 
		 email: "Vanessaparadis@me.com"
});
 	newUser.save(
    function (error, user) {
 		console.log(user);
    }
);

  res.render('index', { title: 'Express' });
});



module.exports = router;
