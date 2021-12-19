import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeImage = (data = {}) => (`
  <a class="gallery__item" href="${data.original}">
    <img class="gallery__image" src="${data.preview}" title="${data.description}" alt="${data.description}" />
  </a>
`);

const app = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = galleryItems.map(makeImage).join('\n');

  new SimpleLightbox('.gallery a', { disableRightClick: true, captionDelay: 250 });
};

app();
