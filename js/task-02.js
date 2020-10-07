const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingListRef = document.querySelector('#ingredients');

const createIngList = ings => {
  return ings.map((ing) => {
    const listItem = document.createElement('li');
    listItem.textContent = ing;
    return listItem;
    });
};

ingListRef.append(...createIngList(ingredients));