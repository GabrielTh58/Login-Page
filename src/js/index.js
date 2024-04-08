const inputsForm = document.querySelectorAll('.inputs');
const btnSubmit =  document.querySelector('#btn-submit');
const validationText = document.querySelectorAll('.required-field-message');
const passwordToggle = document.getElementById('password-toggle');

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault(); 

    inputsForm.forEach((input, index) => {
        if(input.value === ""){
            validationText[index].classList.add('show');
        }
        else{
            validationText[index].classList.remove('show')
        }
    })
})


let isPasswordVisible = false;

passwordToggle.addEventListener('click', function() {
    if (isPasswordVisible) {
        passwordToggle.style.backgroundImage = "url('/src/images/eye-password-hide.svg')";
        document.getElementById('password').type = 'password';
        isPasswordVisible = false;
    } else {
        passwordToggle.style.backgroundImage = "url('/src/images/eye-password-show.svg')";
        document.getElementById('password').type = 'text';
        isPasswordVisible = true;
    }
});
