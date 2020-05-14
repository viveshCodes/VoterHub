const requestsRef = firebase.firestore().collection('requests');

requestsRef.onSnapshot(snapshot =>{
    let html = ``;
    const requests = snapshot;
    requests.forEach(request =>{
        html += `
            <li>${request.data().text}</li>
        `;
    });
    document.querySelector('ul').innerHTML = html;
},err =>{
    console.log(err.mesage);
  }); // err