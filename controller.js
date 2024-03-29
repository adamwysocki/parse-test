/* controller.js */
"user strict;"

var _Promise = require('promise'),
	Parse	 = require('parse').Parse;

/* Game score object */
var GameScore = Parse.Object.extend("GameScore");
	
/* Given a set up inputs save player data in GameScore object */
module.exports.savePlayerData = function(score, name, cheatMode) {
 
  /* return a Promise */
  return new _Promise(function(resolve, reject) {

	/* create new GameScore object */
	var gameScore = new GameScore();
	
	/* populate the object with some data */
	gameScore.set("score", score);
	gameScore.set("playerName", name);
	gameScore.set("cheatMode", cheatMode);
	
	/* save the object */
	gameScore.save(null, {
	  success: function(gameScore) {
	    /* Execute any logic that should take place after the object is saved. */
	    console.log('New object created with objectId: ' + gameScore.id);
		resolve(gameScore);
	  },
	  error: function(gameScore, error) {
	    /* Execute any logic that should take place if the save fails.
	       error is a Parse.Error with an error code and message. */
	    console.log('Failed to create new object, with error code: ' + error.message);
		reject(error);
	  }
	  
	}); /* end save */

  }); /* end return promise */
	
} /* end savePlayer */

/* give a name, find player data */
module.exports.findPlayerData = function(name) {
	
  /* reutn a promise */
  return new _Promise(function(resolve, reject) {	
	/* query the GameScore object */
	var query = new Parse.Query(GameScore);
	
	/* query player by name */
	query.equalTo("playerName", name);
	
	/* execture the query */
	query.find({
	  success: function(results) {
	    console.log("Successfully retrieved " + results.length + " scores.");
	    /* Do something with the returned Parse.Object values */
	    for (var i = 0; i < results.length; i++) {
	      var object = results[i];
	      console.log(object.id + ' - ' + object.get('playerName'));
	    }
		resolve(results);
	  },
	  error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
		reject(error);
	  }
	  
	}); /* end query */
	
  }); /* end return promise */
  
} /* end findPlayer */


