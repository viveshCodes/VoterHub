const functions = require('firebase-functions');

// auth trigger (new user signup)
exports.newUserSignup = functions.auth.user().onCreate(user =>{
    console.log('user created', user.email, user.uid);
});

// auth trigger (user delete)
exports.userDeleted = functions.auth.user().onDelete(user =>{
    console.log('user deleted', user.email, user.uid);
});
