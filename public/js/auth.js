const authSwitchLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');

// toggle auth modals
authSwitchLinks.forEach(link => {
  link.addEventListener('click', () => {
    authModals.forEach(modal => modal.classList.toggle('active'));
  });
});


/*______________Signup, Login, Signout_________________ */
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');

// register
registerForm.addEventListener('submit', (event) =>{
    event.preventDefault();

    const email = registerForm.email.value.trim();
    const password = registerForm.password.value.trim();
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred =>{
            console.log(cred.user);

            registerForm.reset();
        }).catch(err =>{
            registerForm.querySelector('.error').textContent = err.message;
        })
});


// login
loginForm.addEventListener('submit', event =>{
    event.preventDefault();

    // get login credentials
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
        .then(cred =>{
            console.log(cred.user);
            console.log("Login Successful")
            loginForm.reset();

        }).catch(err =>{
            loginForm.querySelector('.error').textContent = err.message;   
        });
});


/*_________Track Auth Status__________________*/
firebase.auth().onAuthStateChanged(user =>{
    if(user){
          authWrapper.classList.remove('open');
          authModals.forEach(modal => modal.classList.remove('active'));     
    }else{
        authWrapper.classList.add('open');
        authModals[0].classList.add('active');     
    }
});
