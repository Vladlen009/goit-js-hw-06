// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.


// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */


const value = document.querySelector('#value');
const decrement = document.querySelector(`button[data-action='decrement']`)
const increment = document.querySelector(`button[data-action='increment']`)


decrement.addEventListener('click', () => {
    value.textContent = +value.textContent - 1;
} )


increment.addEventListener('click', () => {
    value.textContent = +value.textContent + 1;
} )


