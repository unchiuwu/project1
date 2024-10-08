function search() {
    const filter = document.getElementById('find').value.toUpperCase();
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        const title = item.querySelector('h4').textContent || item.querySelector('h4').innerText;
        if (title.toUpperCase().indexOf(filter) > -1) {
            item.style.display = ""; // Show item
        } else {
            item.style.display = "none"; // Hide item
        }
    });
}

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    nameError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true; 
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email-ID is required';
        return false;
    }

    emailError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true; 
}

function validateNumber(){
    var phone = document.getElementById('contact-number').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (phone.length !== 10) {
        phoneError.innerHTML = '10 digit phone number is required';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Enter numeric digits only';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true; 
}

function validateReview(){
    var message = document.getElementById('contact-review').value;

    if (message.length == 0) {
        messageError.innerHTML = 'A message is required';
        return false;
    }

    messageError.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true; 
}

function validateForm(){
    if (!validateName()||!validateNumber()||!validateEmail()||!validateReview()) {
        submitError.innerHTML = 'Please fix your errors.';
        return false;
    }
}