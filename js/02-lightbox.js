import { galleryItems } from './gallery-items.js';

const ul = document.querySelector('.gallery')

for (const galleryItem of galleryItems) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    const img = document.createElement('img')
    
    li.classList.add('gallery__item')
    a.classList.add('gallery__link')
    img.classList.add('gallery__image')

    a.setAttribute('href', galleryItem.original)
    img.setAttribute('src', galleryItem.preview)
    img.setAttribute('alt', galleryItem.description)

    a.appendChild(img)
    li.appendChild(a)
    ul.appendChild(li)
}

console.log(galleryItems);
