

// // Allow line component to accept vertices and color.


var coordinates = AFRAME.utils.coordinates;
AFRAME.registerComponent('line', {
  schema: {
    color: { default: '#000' },
    path: {
      default: [
        { x: -0.5, y: 0, z: 0 },
        { x: 0.5, y: 0, z: 0 }
      ],

      // Deserialize path in the form of comma-separated vec3s: `0 0 0, 1 1 1, 2 0 3`.
      parse: function (value) {
        return value.split(',').map(coordinates.parse);
      },

      // Serialize array of vec3s in case someone does setAttribute('line', 'path', [...]).
      stringify: function (data) {
        return data.map(coordinates.stringify).join(',');
      }
    }
  },
  
  update: function () {
    var material = new THREE.LineBasicMaterial({
	      color: this.data.color
    });

    var geometry = new THREE.Geometry();
    this.data.path.forEach(function (vec3) {
      geometry.vertices.push(
        new THREE.Vector3(vec3.x, vec3.y, vec3.z)
      );
    });

    this.el.setObject3D('mesh', new THREE.Line(geometry, material));
  },
  
  remove: function () {
    this.el.removeObject3D('mesh');
  }
});


AFRAME.registerComponent('bass', {
	schema: {
    	color: { 	default: 0x000333, 
    				parse: function(value) { return value } 
    			},
    	position: { default: {x:0, y:2 ,z:0}},
    	size: {default: {x:1, y:1 ,z:1}}
	},

	init: function() {
		var el = this.el;
		console.log(this.data);
		// var mesh = this.el.getOrCreateObject3D('mesh', THREE.Mesh);
	    // console.log("this is it:")
    	// console.log(mesh)
		// seed(mesh);
    	// el.getOrCreateObject3D('mesh', THREE.Mesh);
	},
	update: function (){
		// setObject3D('mesh'
		var material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff });
	  	// var color1 = new.THREE.Color(this.data.color);
		var geometry = new THREE.BoxGeometry( 3, 3.15, 2 );
		// var material = new THREE.MeshLambertMaterial(
		// 	{ color: 0x345467 }
		// 	);
		console.log(this.data.color);
		material.color = this.data.color;
		material.color = 0x345467;
		this.el.setObject3D('mesh', new THREE.Mesh(geometry, material));
	},
	remove: function () {
    	this.el.removeObject3D('mesh');
  	}


});



