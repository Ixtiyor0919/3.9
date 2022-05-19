var elForm = document.querySelector('.form');
var elNameInput = elForm.querySelector('.input-password');
var elPassword = elForm.querySelector('.password');
var elValid = elForm.querySelector('.fa-check');
var elInvalid = elForm.querySelector('.fa-circle-exclamation');

elForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    elNameInput.value.trim();
    var nameInput = elNameInput.value;

    if(nameInput <= 0 || isNaN(nameInput)) {
        elPassword.style.border = '3px solid red';
        elInvalid.style.display = 'block';
        elValid.style.display = 'none';
    }else {
        elPassword.style.border = '3px solid green';
        elValid.style.display = 'block';
        elInvalid.style.display = 'none';
    }
})