// Simple slide in function with css animations for the mobile menu

$('#toggleMenu').on('click', function () {
    $('#fullHeader').toggleClass('headerToggle');
    $('.wrapper').toggleClass('toggleBody');
    $('.parallaxBackground').toggleClass('toggleBody');
})

var docWidth = document.documentElement.offsetWidth;
[].forEach.call(
    document.querySelectorAll('*'),
    function (el) {
        if (el.offsetWidth > docWidth) {
            console.log(el);
        }
    }
);

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

    // Adding an active class to the selected nav item
    $("a").removeClass("active");
    $(this).addClass("active");

    event.preventDefault();

    // Get the top position of the selected section
    let pos = target.offset().top;

    // Scroll to this new target top position
    $('body, html').animate({
        scrollTop: pos
    }, 800);

    // Collapse the side nav menu once clicked if window width is 1200px or smaller only
    if ($(window).width() <= 1200) {
        $('#fullHeader').toggleClass('headerToggle');
        $('.wrapper').toggleClass('toggleBody');
        $('.parallaxBackground').toggleClass('toggleBody');
    }
});

//Scroll to contact section on clicking 'hire me'
$('.contactMe').on('click', () => {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 800);
})

// Functionality for scroll to top button

scrollTopButton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    displayOnScroll()
};

function displayOnScroll() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document\
$(".scrollToTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
});