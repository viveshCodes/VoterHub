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


// http callable functions (adding a tutorial request)
exports.addRequest = functions.https.onCall((data, context) =>{
    // check if user is not authenticated
    if(!context.auth){
        throw new functions.https.HttpsError(
            'unauthenticated',
            'only authenticated users can add requests'
        );
    }
   if(data.text.length > 50 ){
        throw new functions.https.HttpsError(
            'invalid-argument',
            'request must not be more than 50 characters long'
    );
   }
   return admin.firestore().collection('requests').add({
       text : data.text,
       upvotes:0,
   });

});