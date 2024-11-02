let userName = document.querySelector('.Name');
let userPassword = document.querySelector('.password');
let userNameMessage = document.querySelector('.username-validation'); 
let passwordMessage = document.querySelector('.password-validation'); 
let btn = document.querySelector('.btn');
let toggle = document.querySelector('.toggle__password');
let eyeIcon = document.querySelector('.eye-icon');
let eyeSlashIcon = document.querySelector('.eye-slash-icon');


function user(event) {

    let passwordValue = userPassword.value;
    passwordMessage.innerHTML = '';

    if (passwordValue.length < 8) {
        passwordMessage.innerHTML = 'must not be less than 8 characters';
        passwordMessage.style.color = 'red';
        passwordMessage.style.display= 'block';
    } else {
        passwordMessage.innerHTML = 'The password is correct'; 
        passwordMessage.style.color = 'green';
        passwordMessage.style.display= 'block';
    }
}

function validation() {
    let userNameValue = userName.value;

    if (!/[A-Z]/.test(userNameValue)) {
        userNameMessage.innerHTML = 'must contain at least one capital letter';
        userNameMessage.style.color = 'red';
        userNameMessage.style.display= 'block';
        return false;
    } else {
        userNameMessage.innerHTML = 'Username is correct';
        userNameMessage.style.color = 'green';
        userNameMessage.style.display= 'block';
        return true;
    }
}

toggle.addEventListener('click', function() {
    if (userPassword.type === 'text') {
        userPassword.type = 'password';
        eyeIcon.style.display = 'none'; 
        eyeSlashIcon.style.display = 'block';
    } else {
        userPassword.type = 'text';
        eyeIcon.style.display = 'block'; 
        eyeSlashIcon.style.display = 'none'; 
    }
});


btn.addEventListener('click', function(event) {
    event.preventDefault();

    let inputs = document.querySelectorAll('input');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false; 
        }
    });

    if (allFilled) {
        if (validation() && userPassword.value.length >= 8) {
            alert('Your login was successful');
        }
    } else {
        alert('Enter the information correctly');
    }
});