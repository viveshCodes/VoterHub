const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');
const requestForm = document.querySelector('.new-request form');
// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});


// add request to db via functions
requestForm.addEventListener('submit', (event) =>{
  event.preventDefault();

  // let's invoke our cloud functions
  const addRequest = firebase.functions().httpsCallable('addRequest');
  addRequest({    // invoke above const
    text: requestForm.request.value.trim()
  }).then(()=>{
    requestForm.reset();
    requestModal.classList.remove('open');
    requestForm.querySelector('.error').textContent = '';

  }).catch(err =>{
    requestForm.querySelector('.error').textContent = err.message;
  })
});

// notification
const notification = document.querySelector('.notification');

const showNotification = (message) => {
  notification.textContent = message;
  notification.classList.add('active');
  setTimeout(() => {
    notification.classList.remove('active');
    notification.textContent = '';
  }, 3000);
};