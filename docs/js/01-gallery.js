import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeImage = (data = {}) => (`
  <div class="gallery__item">
    <a class="gallery__link" href="${data.original}">
      <img
        class="gallery__image"
        src="${data.preview}"
        data-source="${data.original}"
        alt="${data.description}"
      />
    </a>
  </div>
`);

const closeModalHandler = (instance, evt) => {
  if (evt.key === 'Escape') {
    instance.close();
    window.removeEventListener('keyup', closeModalHandler);
  }
};

const openImageModal = (url, alt) => {
  const instance = basicLightbox.create(`<img src="${url}" alt="${alt}">`);
  instance.show();

  if (instance.visible()) {
    window.addEventListener('keyup', (evt) => closeModalHandler(instance, evt));
  }
};

const onImagesClickHandler = (evt) => {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery__image')) {
    const fullImageUrl = evt.target.dataset.source;
    const alt = evt.target.getAttribute('alt');
    openImageModal(fullImageUrl, alt);
  }
};

const app = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = galleryItems.map(makeImage).join('\n');
  gallery.addEventListener('click', onImagesClickHandler);
};

app();
