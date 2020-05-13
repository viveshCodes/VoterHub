const functions = require('firebase-functions');

// http request 1 : endpoint request 
exports.randomNumber = functions.https.onRequest((request, response)=>{
    const number = Math.round(Math.random() * 100);
    // log the number in ''functions logs'
    console.log(number);
    response.send(number.toString());
});

// http request 2 : endpoint request 
exports.redirectToGitHub = functions.https.onRequest((request, response)=>{
    response.redirect('https://github.com/viveshCodes');
});

// http callable function
exports.sayHello = functions.https.onCall((data, context) => {
    const name = data.name;
    return `hello ${name} :)`;
  });