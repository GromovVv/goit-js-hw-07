'use strict';

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');
console.log(inputRef, outputRef);

inputRef.addEventListener('input', event => {
    // const value = event.target.value; 
    const { value } = event.target; 
    value.length === 0 ? outputRef.textContent = "незнакомец" : outputRef.textContent = value;
})