// Logic for Morphext - a simple jQuery library that uses animate.css to create a rotating text animation for the home page
jQuery(".text-rotating").Morphext({
    animation: "bounceIn",
    separator: ",",
    speed: 4000,
    complete: function () {
    }
});

// Variable declarations for our parallax library
const scene = document.getElementById('parallaxScene');
const parallaxInstance = new Parallax(scene);