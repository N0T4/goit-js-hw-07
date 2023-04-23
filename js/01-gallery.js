import { galleryItems } from './gallery-items.js';

const ul = document.querySelector('.gallery');
let instance = 0;

for (const galleryItem of galleryItems) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  const img = document.createElement('img');

  li.classList.add('gallery__item');
  a.classList.add('gallery__link');
  img.classList.add('gallery__image');

  img.setAttribute('src', galleryItem.preview);
  img.setAttribute('data-source', galleryItem.original);
  img.setAttribute('alt', galleryItem.description);
  a.setAttribute('href', galleryItem.original);
  
    a.addEventListener('click', (event) => {
        event.preventDefault();
        instance = basicLightbox.create(`
        <img src="${galleryItem.original}" alt="${galleryItem.description}">
        `);
        instance.show();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            instance.close();
        }
    });

  a.appendChild(img);
  li.appendChild(a);
  ul.appendChild(li);
}


