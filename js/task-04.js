const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');
const valueRef = document.querySelector('#value');

let countValue = 0;

const decrement = () => {valueRef.textContent = countValue -= 1;};

const increment = () => {valueRef.textContent = countValue += 1;};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);