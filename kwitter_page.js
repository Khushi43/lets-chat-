//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCPBJSR9sXzxV6SC7FeLaHeLT208lmeV4s",
      authDomain: "kwitter-f35f4.firebaseapp.com",
      databaseURL: "https://kwitter-f35f4-default-rtdb.firebaseio.com",
      projectId: "kwitter-f35f4",
      storageBucket: "kwitter-f35f4.appspot.com",
      messagingSenderId: "657583423642",
      appId: "1:657583423642:web:def0a2376dc242e7561f23",
      measurementId: "G-7YMPC70Z29"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {

      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}