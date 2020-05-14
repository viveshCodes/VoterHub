const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
// auth trigger (new user signup)
exports.newUserSignup = functions.auth.user().onCreate(user =>{
    // for background triggers we must return a value/promise
   return admin.firestore().collection('users').doc(user.uid)        // here user is new user created
        .set({
            email:user.email,
            upvotedOn :[]
        });
});

// auth trigger (user delete)
exports.userDeleted = functions.auth.user().onDelete(user =>{
    const doc = admin.firestore().collection('users').doc(user.uid);       // here user is new user created
        return doc.delete();
       
});
