var screenName = window.prompt("What's your screen name?");

var socket = io();

$("form").submit(function(){

  var messageObject = {
    screenName: screenName,
    message: $("#m").val()
  }

  socket.emit("chat-message", messageObject);
  $("#m").val("");
  return false;

})

socket.on("chat-message", function(msg){
  $('#messages').append($('<li>').text(msg.screenName + ": " + msg.message));
});
