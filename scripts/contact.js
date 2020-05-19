// Using Formspree for simple form submission

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    const form = document.getElementById("contactForm");
    const button = document.getElementById("submit");

    // Success and Error functions for after the form is submitted
    
    function success() {
        form.reset();
        status.innerHTML = "Thanks!";
        $('#contactForm').prepend(`<div class='emailSent'><p>Your message successfully submitted. Thank you, I will get back to you soon!</p><button id='closePopup'><i class="fas fa-times"></i></button></div>`)

        // Close 'thank you' on success popup

        $('#closePopup').click(function() {
            console.log('clicked!');
            $('.emailSent').remove()
        })
    }



    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

  // helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}