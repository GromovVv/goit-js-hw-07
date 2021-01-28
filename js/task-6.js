'use strict';

const inputRef = document.querySelector('#validation-input');
const inputLength = inputRef.dataset.length; 

inputRef.addEventListener('blur', e => {
    const value = e.target.value;
   
    if(value.length == inputLength) {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    else {
        inputRef.classList.remove('valid');
        inputRef.classList.add('invalid');
    };
})