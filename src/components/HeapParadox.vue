<template>
    <div>
        <div id="myDiv"></div>
        <div id="hail"></div>

        <button>Add</button>
        <button>Remove</button>
    </div>
</template>


<script>
    export default {
        mounted() {
            // window.addEventListener("load", function(event) {

                var canvas = document.getElementById('hail');
                var width = window.innerWidth,
                    height = 760;

                canvas.width = window.innerWidth;
                canvas.height = 760;
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
                            wireframes: false,
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
                    Bodies.rectangle(window.innerWidth, 385, 5, 765, options),
                    Bodies.rectangle(window.innerWidth - window.innerWidth / 5, 385, 5, 765, options)
                ]);



                for (var i = 0; i < 25; i++) {
                    setTimeout(function () {
                        var rotatedForcePoint = Vector.rotate({
                            x: 85,
                            y: 100
                        }, 180);

                        var positionx = window.innerWidth - window.innerWidth / 6;
                        var lhail = function () {
                            var largehail = Vertices.fromPath(
                                '67.9 35.4 67.9 24.9 67.8 21.3 66 10.2 57.1 3.5 29.4 0.7 19.2 2.2 10.1 8.2 0.6 32.8 1.7 42.7 	4.4 61.3 11.1 71.5 14 74.5 22.8 80.9 28.9 81.2 37.7 79.9 60.6 70.1 64.8 65 66.9 58.8 67.5 50.7'
                            );
                            return Bodies.fromVertices(positionx, -400, Common.choose([largehail]), {
                                density: 0.1,
                                friction: 1,
                                frictionStatic: 1,
                                frictionAir: 0,
                                restitution: 0.1,
                                render: {

                                }
                            });
                        }
                        World.add(engine.world, lhail());
                    }, 500 * i);
                }

                // run the engine
                Engine.run(engine);
            // });

            var data = [{
                x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                y: [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0],
                type: 'scatter'
            }];

            var layout = {
                title: 'Do you call it pile of rocks?',
                xaxis: {
                    title: 'Number of Rock'
                },
                yaxis: {
                    title: 'Degree of Membership'
                }
            };
            Plotly.newPlot('myDiv', data, layout);
        }
    }
</script>

<style>
#hail {
    width: 50%;
    height: 500px;
    position: absolute;
    top: 0;
    right: 0;
}

#hail canvas {
    width: 100%;
    height: 100%;
}

#myDiv {
    width: 50%
}
</style>

