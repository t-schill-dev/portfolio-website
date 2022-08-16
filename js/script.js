/*
Adding bottom border of active page
*/
const home = document.querySelector('.home-tab');
const about = document.querySelector('.about-tab');
const portfolio = document.querySelector('.projects-tab')
const contact = document.querySelector('.contact-tab');

const activePage = window.location.href;
const pathname = new URL(activePage).pathname
console.log('path', pathname)
    // Matching pathname
switch (pathname) {
    case '/index.html':
        home.classList.add('current');
        break;
    case '/about.html':
        about.classList.add('current');
        break;
    case '/portfolio.html':
        portfolio.classList.add('current');
        break;

    case '/contact.html':
        contact.classList.add('current');
        break;
}

(function() {
    //Form Validation
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');


    function showErrorMessage(input, message) {
        let container = input.parentElement;
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }

    function validateEmail() {
        let value = emailInput.value;
        if (!value) {
            showErrorMessage(emailInput, "Email is a required field");
            return false;
        }
        let hasAtSign = value.indexOf('@');
        let hasDot = value.indexOf('.');
        if (hasAtSign === -1 || hasDot === -1) {
            showErrorMessage(emailInput, "You must enter a valid email")
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;

    }

    function validateForm() {
        let isValidEmail = validateEmail();
        return isValidEmail;
    }
    emailInput.addEventListener('input', validateEmail);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Thank you for submitting your contact information. I will get in touch!");
            location.reload(true);
        }
    })




})();