<style scoped>
#hail { width: 100vw; height: 770px; position: relative; }
#hail canvas { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; }
</style>

<template>
  <div id="hail"></div>
</template>

<script>
window.addEventListener("load",init);
    function init(){

    var canvas = document.getElementById('hail');
var width = window.innerWidth,
    height = 760;

canvas.width = window.innerWidth;
canvas.height = 760;
    // Matter.js - http://brm.io/matter-js/

    // Matter module aliases
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Composites = Matter.Composites,
        Common = Matter.Common,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World,
        Vertices = Matter.Vertices,
		Body = Matter.Body,
		Vector = Matter.Vector,
        Bodies = Matter.Bodies;


    // create a Matter.js engine
    var engine = Engine.create(canvas, {
        render: {
            options: {
            	width: window.innerWidth,
            	height: 760,
				wireframes: true,
				showAngleIndicators: true
        	}
    	}
    });

		engine.world.gravity.x = 0;
		engine.world.gravity.y = 2;

        // add a mouse controlled constraint
        var mouseConstraint = MouseConstraint.create(engine);
        World.add(engine.world, mouseConstraint);


		var offset = 10,
        options = {
            isStatic: true,
            render: {
              fillStyle: 'transparent'
            }
        };


    engine.world.bodies = [];

    // these static walls will not be rendered in this sprites example, see options
    World.add(engine.world, [
        //Bodies.rectangle(window.innerWidth / 2, -5, window.innerWidth, 5, options),
        Bodies.rectangle(window.innerWidth / 2, 760, window.innerWidth, 5, options),
        Bodies.rectangle(window.innerWidth + 5, 385, 5, 765, options),
        Bodies.rectangle(-5, 385, 5, 765, options),
		Bodies.rectangle(window.innerWidth / 2, 273, 535, 135, options),
        Bodies.rectangle(window.innerWidth / 2, 412, 960, 135, options)
    ]);



for (var i = 0; i < 25; i++) {
    setTimeout(function() {



	var rotatedForcePoint = Vector.rotate( { x: 85, y: 100 }, 180);

	var positionx = Math.floor(Math.random() * window.innerWidth) + 1;
		var lhail = function () {
			var largehail = Vertices.fromPath('67.9 35.4 67.9 24.9 67.8 21.3 66 10.2 57.1 3.5 29.4 0.7 19.2 2.2 10.1 8.2 0.6 32.8 1.7 42.7 	4.4 61.3 11.1 71.5 14 74.5 22.8 80.9 28.9 81.2 37.7 79.9 60.6 70.1 64.8 65 66.9 58.8 67.5 50.7');
            return Bodies.fromVertices(positionx, -400, Common.choose([largehail]), {
                density: 0.01,
                friction: 0,
                frictionStatic: 0,
                frictionAir: 0,
                restitution: 1,
                render: {

                }
    		});
		}
  World.add(engine.world, lhail() );
}, 500 * i);
}


for (var i = 0; i < 100; i++) {
    setTimeout(function() {

	var positionx = Math.floor(Math.random() * window.innerWidth) + 1;
		var medhail = function () {
			var midhail = Vertices.fromPath('39.9,21.1 39.9,15 39.9,12.9 38.8,6.5 33.6,2.6 17.5,1 11.6,1.8 6.4,5.3 0.8,19.6 1.5,25.4 3,36.2 6.9,42.1 8.6,43.8 13.7,47.6 17.3,47.7 22.4,47 35.6,41.3 38.1,38.3 39.3,34.7 39.7,30');

            return Bodies.fromVertices(positionx, -100, Common.choose([midhail]), {
                density: 0.01,
                friction: 0,
                frictionStatic: 0,
                frictionAir: 0,
                restitution: 1,
                render: {

                }
    		});
		}
  World.add(engine.world, medhail() );


}, 250 * i);
}

for (var i = 0; i < 200; i++) {
    setTimeout(function() {

	var positionx = Math.floor(Math.random() * window.innerWidth) + 1;
		var shail = function () {
			var smallhail = Vertices.fromPath('21.3,10.7 21.3,7.5 21.3,6.3 20.7,2.9 18,0.9 9.4,0 6.3,0.4 3.5,2.3 0.6,9.9 0.9,12.9 1.7,18.7 3.8,21.8 4.7,22.7 7.4,24.7 9.3,24.8 12,24.4 19,21.4 20.3,19.8 21,17.9 21.2,15.4');

            return Bodies.fromVertices(positionx, -100, Common.choose([smallhail]), {
                render: {
                density: 0.01,
                friction: 0,
                frictionStatic: 0,
                frictionAir: 0,
                restitution: 1,
					sprite: {
                        texture: '../assets/Stone-755-NATURE-Transparent-PNG.png'
                    }
                }
    		});
		}
  World.add(engine.world, shail() );


}, 125 * i);
}




        // run the engine
        Engine.run(engine);
   }
export default {

}
</script>

