
$(function() {
   console.log("hello js");
   initSockets();
});

// SOCKET.IO
function initSockets(){
    socket = io.connect('http://10.100.13.17:3000');
    
    socket.on('hello', function(data) {
        console.log("Socket hello:");
        console.log(data);
        if(data.users){
            for(var i=0;i<data.users.length;i++){
                $("#container.section #content").append("<p>"+data.users[i]+ " from " + data.company+ " says hello</p>");
            }
        }
    });
    var YPOS = 0;
    socket.on('iosono', function(data) {
    //    console.log("Socket iosono:");
    console.log(data);

    if (data.channel == 4 & data.position.y != YPOS) {

        console.log(data.position.x, data.position.y, data.position.z );
        setPos(data.position.x, data.position.y, data.position.z - 10);
    }
    });

}

///VR shizzle
var clap = document.querySelector('[sound]');
var box = document.querySelector('a-box');
function setPos (x,y,z) {
  box.setAttribute('position', {
    x: x,
    y: y,
    z: z
  });
  clap.setAttribute('position', {
    x: x,
    y, y,
    z, z
  });
  clap.components.sound.play();
}


