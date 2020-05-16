// Logic for Morphext - a simple jQuery library that uses animate.css to create a rotating text animation for the home page
jQuery(".text-rotating").Morphext({
    animation: "bounceIn",
    separator: ",",
    speed: 4000,
    complete: function () {}
});

// Variable declarations for our parallax library

const scene = document.getElementById('parallaxScene');
const parallaxInstance = new Parallax(scene);

// Copy email to clipboard from the Contact section

document.getElementById('myEmail').onclick = () => {
    console.log(document.getElementById('myEmail'));
    /* Get the text field */
    const copyText = document.getElementById("myEmail");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    const copyPrompt = document.createElement('p')
    copyPrompt.className = 'copyPrompt'
    const insertText = document.createTextNode('Copied to Clipboard!')
    copyPrompt.appendChild(insertText)

    document.getElementById('emailMe').appendChild(copyPrompt)
    // Mixing vanilla JS and jQuery? Sacrilege! I know I'm sorry!
    $(".copyPrompt").delay(1000).fadeOut(300);
}


//Get the button:
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

// When the user clicks on the button, scroll to the top of the document
// Using jQuery for simple .animate smooth scroll top
$(".scrollToTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 800);
    return false;
});