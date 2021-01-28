'use strict';

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const createListRef = document.querySelector('#ingredients');
console.log(createListRef);

const listItemEl = ingredients.map(
    element => {
        const item = document.createElement('li');
        item.textContent = element;
        return item;
       })

createListRef.append(...listItemEl);


