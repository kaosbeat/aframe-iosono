
$(function() {
   console.log("hello js");
   initSockets();
   // registerAll();



var box = document.querySelector('#bob');




});









// SOCKET.IO
function initSockets(){
    //socket = io.connect('http://10.100.13.17:3000');
   // socket = io.connect('http://192.168.1.145:3000');
// socket = io.connect('http://10.125.119.152:3000');
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
    var YPOS = 0;
    socket.on('iosono', function(data) {
    //    console.log("Socket iosono:");
    //console.log(data);

    if (data.channel == 4 & data.position.y != YPOS) {

       // console.log(data.position.x, data.position.y, data.position.z );
        setPos(data.position.x, data.position.y, data.position.z - 10);
    }
    });

}

///VR shizzle
// var clap = document.querySelector('[sound]');
function setPos (x,y,z,entity) {
  entity.setAttribute('position', {
    x: x,
    y: y,
    z: z
  });
  // clap.setAttribute('position', {
  //   x: x,
  //   y, y,
  //   z, z
  // });
  // clap.components.sound.play();
}


var bass1 = {
  size: 8

}

// $(document).keypress(function(e) {
//   console.log(e);
//   console.log(String.fromCharCode(e.which));
// });
///chinese joypadkeyboard geeft geen keyboard codes weer...


/// 8 objects can be placed and moved 


// $("#happy-face").append("<a-entity mixin='red' line='path: 1 1 0, 1 0.5 0, 1 0 0'>")
// $("#happy-face").append("<a-entity line='path: 1 1 0, 1 5 0, 1 0 0'>")




