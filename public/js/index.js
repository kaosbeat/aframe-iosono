
$(function() {
   console.log("hello js");
   initSockets();
});

// SOCKET.IO
function initSockets(){
    socket = io.connect('http://localhost:3000');
    
    socket.on('hello', function(data) {
        console.log("Socket hello:");
        console.log(data);
        if(data.users){
            for(var i=0;i<data.users.length;i++){
                $("#container.section #content").append("<p>"+data.users[i]+ " from " + data.company+ " says hello</p>");
            }
        }
    });
    socket.on('iosono', function(data) {
    //    console.log("Socket iosono:");
        
    if (data.channel == 4) {

        console.log(data.position.x, data.position.y, data.position.z );
        setPos(data.position.x, data.position.y, data.position.z - 5);
    }
    });

}

///VR shizzle
var box = document.querySelector('a-box');
function setPos (x,y,z) {
  box.setAttribute('position', {
    x: x,
    y: y,
    z: z
  });
}


