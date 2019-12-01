const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });


exports.getHighscore = functions.https.onRequest((req, res) => {

  if(!req.body.name){
    return res.status(400).send(`Must provide game name`)
  }

  let name = req.body.name;

  response.send("Hello from Firebase!");
 });
