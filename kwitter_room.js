var firebaseConfig = {
      apiKey: "AIzaSyDuXP5SvslVWKzXlG9xq7Z04rNJlx7YxWk",
      authDomain: "kwitty-2b019.firebaseapp.com",
      databaseURL: "https://kwitty-2b019-default-rtdb.firebaseio.com",
      projectId: "kwitty-2b019",
      storageBucket: "kwitty-2b019.appspot.com",
      messagingSenderId: "672256067722",
      appId: "1:672256067722:web:336cf930c08ac87c92c573"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom (){
      room_name = document.getElementById ("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room Name-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;

                  //End code
            });
      });
}
getData();