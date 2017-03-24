var config = {
    apiKey: "AIzaSyBNKDQxtZjk6S7NwtlK0xgNT64ZDh3nx9s",
    authDomain: "ride-care-7c85d.firebaseapp.com",
    databaseURL: "https://ride-care-7c85d.firebaseio.com",
    storageBucket: "ride-care-7c85d.appspot.com",
    messagingSenderId: "625233184128"
  };
  firebase.initializeApp(config);

  // Create a variable to reference the database
var database = firebase.database();


// Firebase information
// Public-facing name help_outline Ride-Care
// Project ID help_outline ride-care-7c85d
// Web API Key AIzaSyBNKDQxtZjk6S7NwtlK0xgNT64ZDh3nx9s 
// https://ride-care-7c85d.firebaseio.com/ 

var isUserValid = function() {
  console.log('----- running isUserValid function -----');

var form = document.getElementById('userInputForm');

var userInput = form.elements.username.value;    // Select username entered
var passwordInput = form.elements.password.value; // Select password entered

var userOK = false;  // initialize Boolean variable
var ref = database.ref("users");

// VERIFY USER INFORMATION
// var userInput = prompt('enter user name: '); // used in testing only
// var passwordInput = prompt('enter password: ')  // used in testing only

// var userInput = 'tom'; // used for testing
// var passwordInput = 'tom';  // used for testing

// initialize Boolean variables
var userValid = false;
var passwordValid = false;

var thisUserValid = false;
var thisPasswordValid = false;

ref.on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var userData = childSnapshot.val();
    console.log('user: ', userData.user);
    console.log('password: ', userData.password)
    if (userInput === userData.user) {
      thisUserValid = true;
      userValid = true;
      console.log('this user valid?', thisUserValid)
      if (passwordInput === userData.password) {
          passwordValid = true;
          thisPasswordValid = true;
          console.log('this password valid? ', thisPasswordValid)
      }
      else {
          thisPasswordValid = false;
          console.log('this password valid? ', thisPasswordValid)
      }
    }
    else {
      thisUserValid = false;
      thisPasswordValid = null;
      console.log('this user valid?', thisUserValid);
      console.log('this password valid? ', thisPasswordValid)
    }  
  });
    // alert('check user and password now'); 
    console.log('--------------------------');
    console.log('userValid: ', userValid);
    console.log('passwordValid: ', passwordValid);
    if (userValid && passwordValid) {
      userOK = true;
      console.log('User OK?', userOK);
      console.log('--------------------------');
      return true;
    }
    else {
      userOK = false;
      console.log('User OK?', userOK);
      console.log('--------------------------');
      return false;
    }
});
};