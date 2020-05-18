// Simple slide in function with css animations for the mobile menu

$('#toggleMenu').on('click', function() {
    $('#fullHeader').toggleClass('headerToggle');
    $('.wrapper').toggleClass('toggleBody');
    $('.parallaxBackground').toggleClass('toggleBody');
})

// Smooth scrolling to sections by href

$(document).on('click', 'a[href^="#"]', function (event) {

    // Get element's href/section id
    let elementHref = $(this).attr('href');

    // Declare target variable to be id from stored href
    let target = $(elementHref);

    // Basic error handling
    if (target.length === 0) {
        return;
    }

    event.preventDefault();

    // Get the top position of the selected section
    let pos = target.offset().top;

    // Scroll to this new target top position
    $('body, html').animate({
        scrollTop: pos
    });

    // Collapse the side nav menu once clicked if window width is 1200px or smaller only
    if ($(window).width() <= 1200) {
        $('#fullHeader').toggleClass('headerToggle');
        $('.wrapper').toggleClass('toggleBody');
        $('.parallaxBackground').toggleClass('toggleBody');
    }
});