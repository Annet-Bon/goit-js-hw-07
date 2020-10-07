const inputRef = document.querySelector('#validation-input');

const borderPainter = event => {
  if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
    inputRef.setAttribute('class', 'valid');
  } else inputRef.setAttribute('class', 'invalid');
};

inputRef.addEventListener('blur', borderPainter);