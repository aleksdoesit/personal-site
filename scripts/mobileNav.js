// Simple slide in function with css animations for the mobile menu

$('#toggleMenu').on('click', function() {
    $('#fullHeader').toggleClass('headerToggle')
    $('.wrapper').toggleClass('toggleBody')
    $('.parallaxBackground').toggleClass('toggleBody')
})