<template>
  <div id="app">
    <router-view class="content" />
    <div id="particles-js"></div>
  </div>
</template>

<script>
  import 'particles.js'

  export default {
    name: 'app',
    mounted () {
      particlesJS("particles-js", {
          "particles": {
            "number": {
              "value": 500,
              "density": {
                "enable": true,
                "value_area": 2500
              }
            },
            "color": {
              "value": "#fff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 500,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "bottom",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "repulse"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 0.5
                }
              },
              "bubble": {
                "distance": 400,
                "size": 4,
                "duration": 0.3,
                "opacity": 1,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }, null)
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

#app {
  background: linear-gradient(#8e1625,#240b36);
  height: 100vh;
}

#particles-js {
  height: 100vh;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}

.content {
  position: relative;
  z-index: 2;
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
