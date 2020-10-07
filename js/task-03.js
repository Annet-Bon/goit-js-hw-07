const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const imgListRef = document.querySelector('#gallery');

const createImgGallary = imgs => {
  return imgs.map((img) => {
    imgListRef.innerHTML = '<li><img></li>';
    const imgItemRef = document.querySelector('li');
    const imagRef = document.querySelector('img');
    imgItemRef.classList.add('list-item');
    imagRef.src = img.url;
    imagRef.alt = img.alt;
    imagRef.classList.add('image-item');
    return imgItemRef;
  });
};

imgListRef.append(...createImgGallary(images));