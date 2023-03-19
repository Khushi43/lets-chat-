
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {

      room_name= document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

      
}

function redirectToRoomName(name) {

      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()  {

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
      
}

