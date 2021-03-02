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
  
function send(){
    room_name=document.getElementById("room_name").value;
    user_name=document.getElementById("user_name").value;
    msg=document.getElementById("message").value;

    firebase.database().ref(room_name).push({
        like:0,
        message:msg,
        name:user_name,
    });

    document.getElementById("message").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//code//
console.log(firebase_message_id);
consol.log(message_data);
like=message_data["like"];
message=message_data["message"];
name=message_data["name"];
name_with_tag="<h4>"+name+"</h4>";
message_with_tag="<h2 class='message_h4'>" +message+ "</h2>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
//end//
 } });  }); }
getData();
function logout(){
        window.location="index.html";
        localStorage.removeItem ("Room Name")
        localStorage.removeItem("name");
}
function updateLike(message_like){
    button_id=message_like;
    likes=document.getElementById(button_id).value;
    update_likes= Number(likes)+1;
    firebase.database().ref(room_name).child(message_like).update({
        like:update_likes,
    });
}