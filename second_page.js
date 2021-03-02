var firebaseConfig = {
  apiKey: "AIzaSyBKravtzj4BhENDHx01g0wX2NaDWTwUPBA",
  authDomain: "letschat1-52228.firebaseapp.com",
  databaseURL: "https://letschat1-52228-default-rtdb.firebaseio.com",
  projectId: "letschat1-52228",
  storageBucket: "letschat1-52228.appspot.com",
  messagingSenderId: "469841629626",
  appId: "1:469841629626:web:ad4af711acacb9ed5e4d83"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var room_name=document.getElementById("room_name").value;
function logout(){
    window.location="index.html";
    localStorage.removeItem("name");
}
function add_room(){
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  });

  localStorage.setItem("Room Name", room_name);
  window.location="room_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  room_names = childKey;

  row="<div id="+room_names+" class='room_name' onclick='redirectToRoomPage(this.id)'>#"+room_names+"</div>";
  document.getElementById("output").innerHTML +=row;
 });});}
getData();

function redirectToRoomName(room){
  console.log(room);
  localStorage.setItem("Room Name", room);
  window.location="room_page.html";
}