/* Parse Javascript sample code in Node.js with promises */
"use strict;"

/* Parse module */
var Parse 		= require('parse').Parse,
	controller = require('./controller.js'),
	_Promise	= require('promise');

/* Parse IDs (replace with your own id's from Parse.com ... it's free!) */
//var APP_ID = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
//var JS_KEY = "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";

/* init Parse */
Parse.initialize(APP_ID, JS_KEY);

/* Do the save and query as promises */
controller.savePlayerData(1337, "Sean Plott", false).then(function(data){
  return controller.findPlayerData("Sean Plott");
}).then(function(result){
   console.log('done');
});
