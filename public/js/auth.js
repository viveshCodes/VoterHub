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
            registerForm.querySelector('.error').textContent = error.message;
        })
});
