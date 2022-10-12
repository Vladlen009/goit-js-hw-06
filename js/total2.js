// // Напиши скрипт, который для каждого элемента массива ingredients:

// // Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// // Добавит название ингредиента как его текстовое содержимое.
// // Добавит элементу класс item.
// // После чего вставит все <li> за одну операцию в список ul#ingredients.


const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const list = document.querySelector('#ingredients') 


function setListElement(array){
    for(let item of array){
        const li = document.createElement("li");
        li.textContent = item;
        li.classList.add('item');
        list.appendChild(li);
    }
}

setListElement(ingredients);
