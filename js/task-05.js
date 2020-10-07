const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const inputSender = event => {
    const value = event.currentTarget.value;
    outputRef.textContent = value ? value : 'незнакомец';
};

inputRef.addEventListener('input', inputSender);

