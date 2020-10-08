// const inputRef = document.querySelector('#validation-input');

// const borderPainter = event => {
//   if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
//     inputRef.setAttribute('class', 'valid');
//   } else inputRef.setAttribute('class', 'invalid');
// };

// inputRef.addEventListener('blur', borderPainter);

const inputRef = document.querySelector('#validation-input');

const borderPainter = event => {
  if (event.currentTarget.value.length === Number(inputRef.getAttribute('data-length'))) {
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid');
  } else {
    inputRef.classList.remove('valid')
    inputRef.classList.add('invalid');
  }};

inputRef.addEventListener('blur', borderPainter);