var app = new Vue({
    el: '#app',
    data: {
     requests :[]
    },
    mounted(){
        const requestsRef = firebase.firestore().collection('requests');
        requestsRef.onSnapshot(snapshot =>{
            let requests = [];
            snapshot.forEach(doc =>{
               requests.push({...doc.data(), id:doc.id})
            });
            this.requests = requests;
        }); 
    } // mounted
  }) // vue


