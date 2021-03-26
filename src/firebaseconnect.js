import firebase from 'firebase';
//bạn import quả trí vl =)), ko hiểu bản chất ak
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJJqdlpfeZefdp0mirKs_tBL1P6DvdAvI",
    authDomain: "notemzd-1c445.firebaseapp.com",
    databaseURL: "https://notemzd-1c445-default-rtdb.firebaseio.com",
    projectId: "notemzd-1c445",
    storageBucket: "notemzd-1c445.appspot.com",
    messagingSenderId: "91793488570",
    appId: "1:91793488570:web:c972b6be3e6bfbbf22a083"
  };
  // Initialize Firebase
  
 firebase.initializeApp(firebaseConfig);
 export const firebaseconnect=firebase.database().ref('datafornote' );

  // var reff=firebase.database().ref('datafornote' );
  // reff.set({
  //   "note1":{
  //     id:4,
  //     title:"ngủ",
  //     content:"trưa"},
      
  //     "note2":{
  //       id:2,
  //       title:"ăn",
  //       content:"trưa"},

  //       "note3":{
  //         id:0,
  //         title:"ỉa",
  //         content:"trưa"},
  // })
  // reff.once('value').then(function(snapshot){
  //   snapshot.forEach((function(params) {
  //     console.log(params.val());
  //   })
    
  // )})
      
 
