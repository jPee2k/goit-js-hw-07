import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeImage = ({ original, preview, description } = {}) => (`
  <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" title="${description}" alt="${description}" />
  </a>
`);

const app = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = galleryItems.map(makeImage).join('\n');

  new SimpleLightbox('.gallery a', { disableRightClick: true, captionDelay: 250 });
};

app();
