const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const textChanges = event => {
  text.style.fontSize = `${event.target.value}px`;
};

inputRef.addEventListener('input', textChanges);