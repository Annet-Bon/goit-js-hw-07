const allTitleRef = Array.from(document.querySelector('#categories').children);

console.log(`В списке ${allTitleRef.length} категории.`);

    for (let title of allTitleRef) {
        const category = title.firstElementChild.textContent;
        const quantity = title.lastElementChild.children.length;
        console.log(`Категория: ${category} \n Количество элементов: ${quantity}`);
    };

