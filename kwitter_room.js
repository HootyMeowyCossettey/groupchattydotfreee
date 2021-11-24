
var firebaseConfig = {
      apiKey: "AIzaSyCIriCL9kEsJ-6Pk-ZicFb0Vn_cQ-pLn58",
      authDomain: "welcome--tlqu.firebaseapp.com",
      databaseURL: "https://welcome--tlqu-default-rtdb.firebaseio.com",
      projectId: "welcome--tlqu",
      storageBucket: "welcome--tlqu.appspot.com",
      messagingSenderId: "543034024227",
      appId: "1:543034024227:web:a60b19cf5b13435dc92c96"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});  
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     console.log("Room Name- "+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";      

document.getElementById("output").innerHTML+=row;
});});}
     getData();
     function redirectToRoomName(name){
           console.log(name);
           localStorage.setItem("room_name",name);
           window.location="kwitter_page.html";
     }























































































