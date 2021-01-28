'use strict';

const itemsTitleRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsTitleRef.length} категории.`);

const getSubList = itemsTitleRef.forEach(
    title => {
       console.log(`Категория: ${title.querySelector('h2').textContent}`);
       console.log(`Количество элементов: ${title.querySelector('ul').children.length}`);
    }) 

