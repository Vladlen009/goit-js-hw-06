// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.


// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];



const list = document.querySelector('.gallery');
list.style.display = 'flex';
 list.insertAdjacentHTML('afterbegin',
 `<li style = "margin-right: 10px"><img style ="width:200px; height:150px;" src=${images[0].url} alt=${images[0].alt} /></li>
  <li style = "margin-right: 10px"><img style ="width:200px; height:150px;" src=${images[1].url} alt=${images[1].alt} /></li>
  <li style = "margin-right: 10px"><img style ="width:200px; height:150px;" src=${images[2].url} alt=${images[2].alt} /></li>
 `); 