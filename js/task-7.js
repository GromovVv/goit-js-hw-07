'use strict';

const changeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

changeRef.addEventListener('input', e => {
        e.preventDefault()
        textRef.style.fontSize = `${changeRef.value}px`;
        console.log(textRef.style.fontSize);
});
