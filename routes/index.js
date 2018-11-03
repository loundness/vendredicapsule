var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var options = {connectTimeoutMS: 5000, useNewUrlParser: true };

mongoose.connect[('mongodb://ludovic:Azerty69@ds249873.mlab.com:49873/vendredi', 
    options,         
    function(err) {
     console.log(err);
    }
)];
 var userSchema = mongoose.Schema({
    lastName: String,
    firstName: String,
    age: Number,
    email: String
});
var UserModel = mongoose.model('users', userSchema); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addUsers', function(req, res,){
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
});

module.exports = router;
